from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QuotePutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class QuotePutRequest:
    path_params: QuotePutPathParams = field()
    request: shared.QuoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuotePutResponse:
    content_type: str = field()
    status_code: int = field()
    quote_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
