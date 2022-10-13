from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class QueryDbQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class QueryDbRequest:
    query_params: QueryDbQueryParams = field(default=None)
    

@dataclass
class QueryDbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    query_db_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
