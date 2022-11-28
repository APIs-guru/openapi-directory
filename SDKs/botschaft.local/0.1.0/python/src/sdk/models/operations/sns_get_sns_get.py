from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SnsGetSnsGetQueryParams:
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class SnsGetSnsGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SnsGetSnsGetRequest:
    headers: SnsGetSnsGetHeaders = field()
    query_params: SnsGetSnsGetQueryParams = field()
    

@dataclass
class SnsGetSnsGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    sns_get_sns_get_200_application_json_any: Optional[Any] = field(default=None)
    
