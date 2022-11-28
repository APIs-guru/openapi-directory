from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class QuoteDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuoteDeleteQueryParams:
    timestamp: str = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class QuoteDeleteRequest:
    path_params: QuoteDeletePathParams = field()
    query_params: QuoteDeleteQueryParams = field()
    

@dataclass
class QuoteDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    quote_delete_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
