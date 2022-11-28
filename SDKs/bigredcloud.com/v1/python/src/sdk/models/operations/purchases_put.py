from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PurchasesPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PurchasesPutRequest:
    path_params: PurchasesPutPathParams = field()
    request: shared.PurchaseDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchasesPutResponse:
    content_type: str = field()
    status_code: int = field()
    purchases_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
