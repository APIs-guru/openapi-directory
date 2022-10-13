from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourceOwnerPathParams:
    resource_owner_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceOwnerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceOwnerSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetResourceOwnerSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetResourceOwnerSecurity:
    option1: Optional[GetResourceOwnerSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetResourceOwnerSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetResourceOwnerRequest:
    path_params: GetResourceOwnerPathParams = field(default=None)
    security: GetResourceOwnerSecurity = field(default=None)
    

@dataclass
class GetResourceOwnerResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    resource_owner: Optional[shared.ResourceOwner] = field(default=None)
    status_code: int = field(default=None)
    
