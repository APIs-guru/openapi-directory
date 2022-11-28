from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesCreditNotesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesCreditNotesDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesCreditNotesDeleteRequest:
    path_params: SalesCreditNotesDeletePathParams = field()
    query_params: SalesCreditNotesDeleteQueryParams = field()
    

@dataclass
class SalesCreditNotesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    sales_credit_notes_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
