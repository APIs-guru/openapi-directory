from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class FetchFarmOrganizationByTypeAndIDPathParams:
    farm_organization_id: str = field(metadata={'path_param': { 'field_name': 'farmOrganizationId', 'style': 'simple', 'explode': False }})
    farm_organization_type: shared.FarmOrganizationTypeEnum = field(metadata={'path_param': { 'field_name': 'farmOrganizationType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDRequest:
    path_params: FetchFarmOrganizationByTypeAndIDPathParams = field()
    security: FetchFarmOrganizationByTypeAndIDSecurity = field()
    

@dataclass
class FetchFarmOrganizationByTypeAndIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    farm_organization: Optional[Any] = field(default=None)
    
