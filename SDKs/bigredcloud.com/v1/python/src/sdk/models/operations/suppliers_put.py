from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SuppliersPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersPutRequest:
    path_params: SuppliersPutPathParams = field()
    request: shared.SupplierDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SuppliersPutResponse:
    content_type: str = field()
    status_code: int = field()
    suppliers_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
