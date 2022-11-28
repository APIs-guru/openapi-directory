from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class QuoteClosePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuoteCloseRequest:
    path_params: QuoteClosePathParams = field()
    

@dataclass
class QuoteCloseResponse:
    content_type: str = field()
    status_code: int = field()
    quote_close_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
