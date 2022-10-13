from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBundlesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBundlesIDRequest:
    path_params: GetBundlesIDPathParams = field(default=None)
    

@dataclass
class GetBundlesIDResponse:
    bundle_entity: Optional[shared.BundleEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
