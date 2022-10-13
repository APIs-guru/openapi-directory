from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PurchasesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PurchasesDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class PurchasesDeleteRequest:
    path_params: PurchasesDeletePathParams = field(default=None)
    query_params: PurchasesDeleteQueryParams = field(default=None)
    

@dataclass
class PurchasesDeleteResponse:
    content_type: str = field(default=None)
    purchases_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
