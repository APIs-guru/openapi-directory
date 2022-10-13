from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SalesEntriesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesEntriesDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class SalesEntriesDeleteRequest:
    path_params: SalesEntriesDeletePathParams = field(default=None)
    query_params: SalesEntriesDeleteQueryParams = field(default=None)
    

@dataclass
class SalesEntriesDeleteResponse:
    content_type: str = field(default=None)
    sales_entries_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
