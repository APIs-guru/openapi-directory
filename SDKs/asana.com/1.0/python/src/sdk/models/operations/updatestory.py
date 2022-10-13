from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateStoryPathParams:
    story_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'story_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStoryQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateStoryRequestBody:
    data: Optional[shared.StoryRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateStoryRequest:
    path_params: UpdateStoryPathParams = field(default=None)
    query_params: UpdateStoryQueryParams = field(default=None)
    request: UpdateStoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateStory200ApplicationJSON:
    data: Optional[shared.StoryResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateStoryResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    update_story_200_application_json_object: Optional[UpdateStory200ApplicationJSON] = field(default=None)
    
