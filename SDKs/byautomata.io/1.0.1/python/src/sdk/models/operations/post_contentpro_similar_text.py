from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostContentproSimilarTextRequestBody:
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class PostContentproSimilarTextRequest:
    request: PostContentproSimilarTextRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostContentproSimilarText200ApplicationJSONData:
    article: Optional[shared.Article] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article' }})
    company: Optional[shared.ContentProCompany] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    snippets: Optional[shared.ContentProSnippets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippets' }})
    

@dataclass_json
@dataclass
class PostContentproSimilarText200ApplicationJSON:
    calls_per_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calls_per_month' }})
    count_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count_remaining' }})
    data: Optional[List[PostContentproSimilarText200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    renewal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewal_date' }})
    

@dataclass
class PostContentproSimilarTextResponse:
    content_type: str = field(default=None)
    post_contentpro_similar_text_200_application_json_object: Optional[PostContentproSimilarText200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
