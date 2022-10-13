from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchPlaceIndexForTextPathParams:
    index_name: str = field(default=None, metadata={'path_param': { 'field_name': 'IndexName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchPlaceIndexForTextHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SearchPlaceIndexForTextRequestBody:
    bias_position: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BiasPosition' }})
    filter_b_box: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterBBox' }})
    filter_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterCountries' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    

@dataclass
class SearchPlaceIndexForTextRequest:
    path_params: SearchPlaceIndexForTextPathParams = field(default=None)
    headers: SearchPlaceIndexForTextHeaders = field(default=None)
    request: SearchPlaceIndexForTextRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchPlaceIndexForTextResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    search_place_index_for_text_response: Optional[shared.SearchPlaceIndexForTextResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
