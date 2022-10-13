from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetIntegrationLinkDetailsPathParams:
    integration_link_type: shared.IntegrationLinkTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntegrationLinkDetailsRequest:
    path_params: GetIntegrationLinkDetailsPathParams = field(default=None)
    

@dataclass
class GetIntegrationLinkDetailsResponse:
    content_type: str = field(default=None)
    integration_link_details_model: Optional[shared.IntegrationLinkDetailsModel] = field(default=None)
    status_code: int = field(default=None)
    
