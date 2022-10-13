from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class CreateOpenIDIdpConfigRequestFlowEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    HYBRID = "hybrid"

class CreateOpenIDIdpConfigRequestUserInfoSourceEnum(str, Enum):
    USER_INFO_ENDPOINT = "user_info_endpoint"
    ID_TOKEN = "id_token"


@dataclass_json
@dataclass
class CreateOpenIDIdpConfigRequest:
    authorization_end_point_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationEndPointUrl' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    fallback_mapping_claim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallbackMappingClaim' }})
    flow: Optional[CreateOpenIDIdpConfigRequestFlowEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow' }})
    issuer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    jwks_end_point_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwksEndPointUrl' }})
    mapping_claim: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappingClaim' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pkce_challenge_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pkceChallengeMethod' }})
    pkce_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pkceEnabled' }})
    redirect_uris: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUris' }})
    scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token_end_point_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenEndPointUrl' }})
    user_import_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userImportEnabled' }})
    user_import_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userImportGroup' }})
    user_info_end_point_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfoEndPointUrl' }})
    user_info_source: Optional[CreateOpenIDIdpConfigRequestUserInfoSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfoSource' }})
    user_management_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userManagementUrl' }})
    user_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userUpdateEnabled' }})
    
