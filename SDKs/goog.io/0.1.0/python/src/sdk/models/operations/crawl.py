from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CrawlPathParams:
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass
class CrawlRequest:
    path_params: CrawlPathParams = field(default=None)
    

@dataclass_json
@dataclass
class Crawl200ApplicationJSON:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    results: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class CrawlResponse:
    content_type: str = field(default=None)
    crawl_200_application_json_object: Optional[Crawl200ApplicationJSON] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
