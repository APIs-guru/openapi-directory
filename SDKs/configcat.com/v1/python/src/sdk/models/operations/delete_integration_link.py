from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DeleteIntegrationLinkPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    integration_link_type: shared.IntegrationLinkTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIntegrationLinkRequest:
    path_params: DeleteIntegrationLinkPathParams = field(default=None)
    

@dataclass
class DeleteIntegrationLinkResponse:
    content_type: str = field(default=None)
    delete_integration_link_model: Optional[shared.DeleteIntegrationLinkModel] = field(default=None)
    status_code: int = field(default=None)
    
