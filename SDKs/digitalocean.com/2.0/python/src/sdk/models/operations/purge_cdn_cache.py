from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PurgeCdnCachePathParams:
    cdn_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cdn_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PurgeCdnCacheRequestBody:
    files: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    

@dataclass
class PurgeCdnCacheRequest:
    path_params: PurgeCdnCachePathParams = field(default=None)
    request: PurgeCdnCacheRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PurgeCdnCache401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PurgeCdnCacheResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    purge_cdn_cache_401_application_json_object: Optional[PurgeCdnCache401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
