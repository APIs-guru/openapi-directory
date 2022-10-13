from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class FetchFarmOrganizationByTypeAndIDPathParams:
    farm_organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'farmOrganizationId', 'style': 'simple', 'explode': False }})
    farm_organization_type: shared.FarmOrganizationTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'farmOrganizationType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDSecurity:
    option1: Optional[FetchFarmOrganizationByTypeAndIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchFarmOrganizationByTypeAndIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchFarmOrganizationByTypeAndIDRequest:
    path_params: FetchFarmOrganizationByTypeAndIDPathParams = field(default=None)
    security: FetchFarmOrganizationByTypeAndIDSecurity = field(default=None)
    

@dataclass
class FetchFarmOrganizationByTypeAndIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    farm_organization: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
