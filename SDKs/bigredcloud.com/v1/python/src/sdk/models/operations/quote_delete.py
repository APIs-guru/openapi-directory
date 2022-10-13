from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class QuoteDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuoteDeleteQueryParams:
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class QuoteDeleteRequest:
    path_params: QuoteDeletePathParams = field(default=None)
    query_params: QuoteDeleteQueryParams = field(default=None)
    

@dataclass
class QuoteDeleteResponse:
    content_type: str = field(default=None)
    quote_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
