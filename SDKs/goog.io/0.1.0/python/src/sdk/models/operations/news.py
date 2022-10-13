from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class NewsPathParams:
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsRequest:
    path_params: NewsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class News200ApplicationJSONEntries:
    guidislink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guidislink' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    published: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    published_parsed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_parsed' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    sub_articles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_articles' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    summary_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_detail' }})
    

@dataclass_json
@dataclass
class News200ApplicationJSONFeed:
    generator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generator' }})
    generator_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generator_detail' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    links: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    publisher_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher_detail' }})
    rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights' }})
    rights_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights_detail' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    subtitle_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle_detail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    updated_parsed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_parsed' }})
    

@dataclass_json
@dataclass
class News200ApplicationJSON:
    entries: Optional[List[News200ApplicationJSONEntries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    feed: Optional[News200ApplicationJSONFeed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feed' }})
    

@dataclass
class NewsResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    news_200_application_json_object: Optional[News200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
