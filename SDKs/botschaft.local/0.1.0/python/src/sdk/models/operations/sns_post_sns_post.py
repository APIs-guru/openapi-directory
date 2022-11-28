from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SnsPostSnsPostHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SnsPostSnsPostRequest:
    headers: SnsPostSnsPostHeaders = field()
    request: shared.SnsMessageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SnsPostSnsPostResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    sns_post_sns_post_200_application_json_any: Optional[Any] = field(default=None)
    
