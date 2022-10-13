from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesRepPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesRepPutRequest:
    path_params: SalesRepPutPathParams = field(default=None)
    request: shared.SaleRepsDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesRepPutResponse:
    content_type: str = field(default=None)
    sales_rep_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
