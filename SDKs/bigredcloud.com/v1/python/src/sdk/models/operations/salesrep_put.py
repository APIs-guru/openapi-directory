from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesRepPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesRepPutRequest:
    path_params: SalesRepPutPathParams = field()
    request: shared.SaleRepsDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesRepPutResponse:
    content_type: str = field()
    status_code: int = field()
    sales_rep_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
