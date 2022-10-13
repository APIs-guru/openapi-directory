from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseAvatar:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseCas:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseCollectd:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    encryption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseCustomer:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key_data' }})
    secret_key_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret_key_data' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseGithubOauth:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_name' }})
    organization_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_team' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseGithubSsl:
    cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cert' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseLdapProfile:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    mail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mail' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseLdapReconciliation:
    org: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseLdap:
    admin_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_group' }})
    base: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    bind_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bind_dn' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    posix_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posix_support' }})
    profile: Optional[EnterpriseSettingsEnterpriseLdapProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    reconciliation: Optional[EnterpriseSettingsEnterpriseLdapReconciliation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciliation' }})
    recursive_group_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursive_group_search' }})
    search_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_strategy' }})
    sync_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sync_enabled' }})
    team_sync_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_sync_interval' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    user_groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_groups' }})
    user_sync_emails: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_sync_emails' }})
    user_sync_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_sync_interval' }})
    user_sync_keys: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_sync_keys' }})
    virtual_attribute_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtual_attribute_enabled' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseLicense:
    cluster_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_support' }})
    evaluation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluation' }})
    expire_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_at' }})
    perpetual: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perpetual' }})
    seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats' }})
    ssh_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_allowed' }})
    support_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support_key' }})
    unlimited_seating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited_seating' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseMapping:
    basemap: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basemap' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    tileserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tileserver' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseNtp:
    primary_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_server' }})
    secondary_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary_server' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterprisePages:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseSaml:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    certificate_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_path' }})
    disable_admin_demote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_admin_demote' }})
    idp_initiated_sso: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idp_initiated_sso' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    sso_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sso_url' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseSMTP:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    discard_to_noreply_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discard-to-noreply-address' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    enable_starttls_auto: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable_starttls_auto' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    noreply_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noreply_address' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    support_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support_address' }})
    support_address_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support_address_type' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_name' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseSnmp:
    community: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'community' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterpriseSyslog:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    protocol_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol_name' }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server' }})
    

@dataclass_json
@dataclass
class EnterpriseSettingsEnterprise:
    admin_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_password' }})
    assets: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    auth_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_mode' }})
    avatar: Optional[EnterpriseSettingsEnterpriseAvatar] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar' }})
    cas: Optional[EnterpriseSettingsEnterpriseCas] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cas' }})
    collectd: Optional[EnterpriseSettingsEnterpriseCollectd] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectd' }})
    configuration_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration_id' }})
    configuration_run_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration_run_count' }})
    customer: Optional[EnterpriseSettingsEnterpriseCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    expire_sessions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expire_sessions' }})
    github_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_hostname' }})
    github_oauth: Optional[EnterpriseSettingsEnterpriseGithubOauth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_oauth' }})
    github_ssl: Optional[EnterpriseSettingsEnterpriseGithubSsl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_ssl' }})
    http_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_proxy' }})
    identicons_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identicons_host' }})
    ldap: Optional[EnterpriseSettingsEnterpriseLdap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap' }})
    license: Optional[EnterpriseSettingsEnterpriseLicense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    load_balancer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer' }})
    mapping: Optional[EnterpriseSettingsEnterpriseMapping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping' }})
    ntp: Optional[EnterpriseSettingsEnterpriseNtp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ntp' }})
    pages: Optional[EnterpriseSettingsEnterprisePages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    private_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_mode' }})
    public_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_pages' }})
    saml: Optional[EnterpriseSettingsEnterpriseSaml] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saml' }})
    signup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signup_enabled' }})
    smtp: Optional[EnterpriseSettingsEnterpriseSMTP] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp' }})
    snmp: Optional[EnterpriseSettingsEnterpriseSnmp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp' }})
    subdomain_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain_isolation' }})
    syslog: Optional[EnterpriseSettingsEnterpriseSyslog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syslog' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    

@dataclass_json
@dataclass
class EnterpriseSettings:
    enterprise: Optional[EnterpriseSettingsEnterprise] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterprise' }})
    run_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run_list' }})
    
