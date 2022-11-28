from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SsoStrategyEntityDeprovisionBehaviorEnum(str, Enum):
    DISABLE = "disable"
    DELETE = "delete"

class SsoStrategyEntityLdapUsernameFieldEnum(str, Enum):
    S_AM_ACCOUNT_NAME = "sAMAccountName"
    USER_PRINCIPAL_NAME = "userPrincipalName"

class SsoStrategyEntityProtocolEnum(str, Enum):
    OAUTH2 = "oauth2"
    UNUSED_OPENID2 = "_unused_openid2"
    SAML = "saml"
    ACTIVE_DIRECTORY = "active_directory"
    OPEN_LDAP = "open_ldap"
    SCIM = "scim"

class SsoStrategyEntityProviderEnum(str, Enum):
    GOOGLE = "google"
    AUTH0 = "auth0"
    OKTA = "okta"
    ATLASSIAN = "atlassian"
    AZURE = "azure"
    BOX = "box"
    DROPBOX = "dropbox"
    SLACK = "slack"
    UNUSED_UBUNTU = "_unused_ubuntu"
    ONELOGIN = "onelogin"
    SAML = "saml"
    IDAPTIVE = "idaptive"
    LDAP = "ldap"
    SCIM = "scim"

class SsoStrategyEntityScimAuthenticationMethodEnum(str, Enum):
    NONE = "none"
    BASIC = "basic"
    TOKEN = "token"


@dataclass_json
@dataclass
class SsoStrategyEntity:
    r"""SsoStrategyEntity
    List Sso Strategies
    """
    
    deprovision_behavior: Optional[SsoStrategyEntityDeprovisionBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprovision_behavior') }})
    deprovision_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprovision_groups') }})
    deprovision_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprovision_users') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    ldap_base_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_base_dn') }})
    ldap_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_domain') }})
    ldap_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_host') }})
    ldap_host_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_host_2') }})
    ldap_host_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_host_3') }})
    ldap_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_port') }})
    ldap_secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_secure') }})
    ldap_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_username') }})
    ldap_username_field: Optional[SsoStrategyEntityLdapUsernameFieldEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_username_field') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    protocol: Optional[SsoStrategyEntityProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    provider: Optional[SsoStrategyEntityProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    provision_attachments_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_attachments_permission') }})
    provision_company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_company') }})
    provision_dav_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_dav_permission') }})
    provision_email_signup_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_email_signup_groups') }})
    provision_ftp_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_ftp_permission') }})
    provision_group_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_group_default') }})
    provision_group_exclusion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_group_exclusion') }})
    provision_group_inclusion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_group_inclusion') }})
    provision_group_required: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_group_required') }})
    provision_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_groups') }})
    provision_sftp_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_sftp_permission') }})
    provision_site_admin_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_site_admin_groups') }})
    provision_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_time_zone') }})
    provision_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision_users') }})
    saml_provider_cert_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_cert_fingerprint') }})
    saml_provider_issuer_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_issuer_url') }})
    saml_provider_metadata_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_metadata_content') }})
    saml_provider_metadata_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_metadata_url') }})
    saml_provider_slo_target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_slo_target_url') }})
    saml_provider_sso_target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml_provider_sso_target_url') }})
    scim_authentication_method: Optional[SsoStrategyEntityScimAuthenticationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scim_authentication_method') }})
    scim_oauth_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scim_oauth_access_token') }})
    scim_oauth_access_token_expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scim_oauth_access_token_expires_at') }})
    scim_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scim_username') }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    
