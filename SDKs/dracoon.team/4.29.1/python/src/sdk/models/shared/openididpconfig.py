from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OpenIDIdpConfigFlowEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    HYBRID = "hybrid"

class OpenIDIdpConfigUserInfoSourceEnum(str, Enum):
    USER_INFO_ENDPOINT = "user_info_endpoint"
    ID_TOKEN = "id_token"


@dataclass_json
@dataclass
class OpenIDIdpConfig:
    r"""OpenIDIdpConfig
    OpenID Connect IDP configuration
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    authorization_end_point_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationEndPointUrl') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    fallback_mapping_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackMappingClaim') }})
    flow: Optional[OpenIDIdpConfigFlowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    jwks_end_point_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwksEndPointUrl') }})
    mapping_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingClaim') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pkce_challenge_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkceChallengeMethod') }})
    pkce_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkceEnabled') }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUris') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token_end_point_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenEndPointUrl') }})
    user_import_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImportEnabled') }})
    user_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImportGroup') }})
    user_info_end_point_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoEndPointUrl') }})
    user_info_source: Optional[OpenIDIdpConfigUserInfoSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoSource') }})
    user_management_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManagementUrl') }})
    user_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUpdateEnabled') }})
    
