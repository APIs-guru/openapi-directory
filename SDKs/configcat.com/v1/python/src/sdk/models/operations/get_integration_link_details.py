from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetIntegrationLinkDetailsPathParams:
    integration_link_type: shared.IntegrationLinkTypeEnum = field(metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntegrationLinkDetailsRequest:
    path_params: GetIntegrationLinkDetailsPathParams = field()
    

@dataclass
class GetIntegrationLinkDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    integration_link_details_model: Optional[shared.IntegrationLinkDetailsModel] = field(default=None)
    
