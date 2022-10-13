from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SuppliersPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersPutRequest:
    path_params: SuppliersPutPathParams = field(default=None)
    request: shared.SupplierDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SuppliersPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    suppliers_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
