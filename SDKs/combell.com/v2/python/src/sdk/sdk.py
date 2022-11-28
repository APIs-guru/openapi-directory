

import requests

from . import utils

from .accounts import Accounts
from .dns_records import DNSRecords
from .domains import Domains
from .linux_hostings import LinuxHostings
from .mail_zones import MailZones
from .mailboxes import Mailboxes
from .mysql_databases import MySQLDatabases
from .provisioning_jobs import ProvisioningJobs
from .ssh import SSH
from .ssl_certificate_requests import SslCertificateRequests
from .ssl_certificates import SslCertificates
from .servicepacks import Servicepacks
from .windows_hostings import WindowsHostings


SERVERS = [
	"https://combell.com/v2",
]


class SDK:
    
    accounts: Accounts
    dns_records: DNSRecords
    domains: Domains
    linux_hostings: LinuxHostings
    mail_zones: MailZones
    mailboxes: Mailboxes
    my_sql_databases: MySQLDatabases
    provisioning_jobs: ProvisioningJobs
    ssh: SSH
    ssl_certificate_requests: SslCertificateRequests
    ssl_certificates: SslCertificates
    servicepacks: Servicepacks
    windows_hostings: WindowsHostings

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.accounts = Accounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dns_records = DNSRecords(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.domains = Domains(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.linux_hostings = LinuxHostings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mail_zones = MailZones(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mailboxes = Mailboxes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.my_sql_databases = MySQLDatabases(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.provisioning_jobs = ProvisioningJobs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ssh = SSH(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ssl_certificate_requests = SslCertificateRequests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ssl_certificates = SslCertificates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.servicepacks = Servicepacks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.windows_hostings = WindowsHostings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    