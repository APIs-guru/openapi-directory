from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PurchasesPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PurchasesPutRequest:
    path_params: PurchasesPutPathParams = field(default=None)
    request: shared.PurchaseDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchasesPutResponse:
    content_type: str = field(default=None)
    purchases_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
