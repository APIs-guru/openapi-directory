from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateConfigPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConfigRequests:
    create_config_request: Optional[shared.CreateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_config_request1: Optional[shared.CreateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_config_request2: Optional[shared.CreateConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateConfigRequest:
    path_params: CreateConfigPathParams = field(default=None)
    request: CreateConfigRequests = field(default=None)
    

@dataclass
class CreateConfigResponse:
    config_model: Optional[shared.ConfigModel] = field(default=None)
    config_model_haljson: Optional[shared.ConfigModelHaljson] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
