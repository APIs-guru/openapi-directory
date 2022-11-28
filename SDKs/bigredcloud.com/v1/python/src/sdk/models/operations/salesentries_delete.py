from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesEntriesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesEntriesDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesEntriesDeleteRequest:
    path_params: SalesEntriesDeletePathParams = field()
    query_params: SalesEntriesDeleteQueryParams = field()
    

@dataclass
class SalesEntriesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    sales_entries_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
