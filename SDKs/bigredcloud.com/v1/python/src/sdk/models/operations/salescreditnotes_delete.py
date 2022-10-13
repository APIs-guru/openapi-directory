from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesCreditNotesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesCreditNotesDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesCreditNotesDeleteRequest:
    path_params: SalesCreditNotesDeletePathParams = field(default=None)
    query_params: SalesCreditNotesDeleteQueryParams = field(default=None)
    

@dataclass
class SalesCreditNotesDeleteResponse:
    content_type: str = field(default=None)
    sales_credit_notes_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
