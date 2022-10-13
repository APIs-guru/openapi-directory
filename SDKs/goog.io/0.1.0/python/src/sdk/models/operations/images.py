from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ImagesPathParams:
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImagesRequest:
    path_params: ImagesPathParams = field(default=None)
    

@dataclass_json
@dataclass
class Images200ApplicationJSONImageResultsImage:
    alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    

@dataclass_json
@dataclass
class Images200ApplicationJSONImageResultsLink:
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Images200ApplicationJSONImageResults:
    image: Optional[Images200ApplicationJSONImageResultsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    link: Optional[Images200ApplicationJSONImageResultsLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class Images200ApplicationJSON:
    answers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    image_results: Optional[List[Images200ApplicationJSONImageResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_results' }})
    results: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class ImagesResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    images_200_application_json_object: Optional[Images200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
