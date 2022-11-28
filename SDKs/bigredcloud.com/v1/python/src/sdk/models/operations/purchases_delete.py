from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PurchasesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PurchasesDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class PurchasesDeleteRequest:
    path_params: PurchasesDeletePathParams = field()
    query_params: PurchasesDeleteQueryParams = field()
    

@dataclass
class PurchasesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    purchases_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
