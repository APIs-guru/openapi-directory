from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBundlesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBundlesIDRequest:
    path_params: GetBundlesIDPathParams = field()
    

@dataclass
class GetBundlesIDResponse:
    content_type: str = field()
    status_code: int = field()
    bundle_entity: Optional[shared.BundleEntity] = field(default=None)
    
