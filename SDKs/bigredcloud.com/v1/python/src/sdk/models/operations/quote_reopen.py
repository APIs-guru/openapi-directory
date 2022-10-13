from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class QuoteReopenPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuoteReopenRequest:
    path_params: QuoteReopenPathParams = field(default=None)
    

@dataclass
class QuoteReopenResponse:
    content_type: str = field(default=None)
    quote_reopen_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
