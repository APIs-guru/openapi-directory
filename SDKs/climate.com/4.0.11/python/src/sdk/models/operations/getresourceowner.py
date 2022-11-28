from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourceOwnerPathParams:
    resource_owner_id: str = field(metadata={'path_param': { 'field_name': 'resourceOwnerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceOwnerSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetResourceOwnerRequest:
    path_params: GetResourceOwnerPathParams = field()
    security: GetResourceOwnerSecurity = field()
    

@dataclass
class GetResourceOwnerResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    resource_owner: Optional[shared.ResourceOwner] = field(default=None)
    
