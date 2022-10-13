from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesInvoicesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesInvoicesDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesInvoicesDeleteRequest:
    path_params: SalesInvoicesDeletePathParams = field(default=None)
    query_params: SalesInvoicesDeleteQueryParams = field(default=None)
    

@dataclass
class SalesInvoicesDeleteResponse:
    content_type: str = field(default=None)
    sales_invoices_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
