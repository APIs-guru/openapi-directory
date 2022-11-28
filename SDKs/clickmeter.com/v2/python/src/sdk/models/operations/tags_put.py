from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagsPutRequests:
    api_core_dto_tags_tag: Optional[shared.APICoreDtoTagsTag] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_tags_tag1: Optional[shared.APICoreDtoTagsTag] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_tags_tag2: Optional[shared.APICoreDtoTagsTag] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TagsPutRequest:
    request: TagsPutRequests = field()
    

@dataclass
class TagsPutResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntityURISystemInt64] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
