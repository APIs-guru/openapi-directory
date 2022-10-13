from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AddOrUpdateIntegrationLinkPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    integration_link_type: shared.IntegrationLinkTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'integrationLinkType', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    setting_id: int = field(default=None, metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddOrUpdateIntegrationLinkRequests:
    add_or_update_integration_link_model: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    add_or_update_integration_link_model1: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_or_update_integration_link_model2: Optional[shared.AddOrUpdateIntegrationLinkModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddOrUpdateIntegrationLinkRequest:
    path_params: AddOrUpdateIntegrationLinkPathParams = field(default=None)
    request: Optional[AddOrUpdateIntegrationLinkRequests] = field(default=None)
    

@dataclass
class AddOrUpdateIntegrationLinkResponse:
    content_type: str = field(default=None)
    integration_link_model: Optional[shared.IntegrationLinkModel] = field(default=None)
    status_code: int = field(default=None)
    
