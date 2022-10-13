from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetSearchSuggestionsXAmzTargetEnum(str, Enum):
    SAGE_MAKER_GET_SEARCH_SUGGESTIONS = "SageMaker.GetSearchSuggestions"


@dataclass
class GetSearchSuggestionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetSearchSuggestionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetSearchSuggestionsRequest:
    headers: GetSearchSuggestionsHeaders = field(default=None)
    request: shared.GetSearchSuggestionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSearchSuggestionsResponse:
    content_type: str = field(default=None)
    get_search_suggestions_response: Optional[shared.GetSearchSuggestionsResponse] = field(default=None)
    status_code: int = field(default=None)
    
