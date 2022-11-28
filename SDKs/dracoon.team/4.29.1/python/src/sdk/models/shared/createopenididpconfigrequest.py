from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateOpenIDIdpConfigRequestFlowEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    HYBRID = "hybrid"

class CreateOpenIDIdpConfigRequestUserInfoSourceEnum(str, Enum):
    USER_INFO_ENDPOINT = "user_info_endpoint"
    ID_TOKEN = "id_token"


@dataclass_json
@dataclass
class CreateOpenIDIdpConfigRequest:
    r"""CreateOpenIDIdpConfigRequest
    Request model for creating an OpenID Connect IDP configuration
    """
    
    authorization_end_point_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationEndPointUrl') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    issuer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    jwks_end_point_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwksEndPointUrl') }})
    mapping_claim: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingClaim') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_uris: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUris') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token_end_point_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenEndPointUrl') }})
    user_info_end_point_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoEndPointUrl') }})
    fallback_mapping_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackMappingClaim') }})
    flow: Optional[CreateOpenIDIdpConfigRequestFlowEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    pkce_challenge_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkceChallengeMethod') }})
    pkce_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pkceEnabled') }})
    user_import_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImportEnabled') }})
    user_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userImportGroup') }})
    user_info_source: Optional[CreateOpenIDIdpConfigRequestUserInfoSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfoSource') }})
    user_management_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManagementUrl') }})
    user_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUpdateEnabled') }})
    
