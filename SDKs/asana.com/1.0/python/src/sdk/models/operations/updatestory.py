from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateStoryPathParams:
    story_gid: str = field(metadata={'path_param': { 'field_name': 'story_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStoryQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateStoryRequestBodyInput:
    data: Optional[shared.StoryRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class UpdateStory200ApplicationJSON:
    data: Optional[shared.StoryResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class UpdateStoryRequest:
    path_params: UpdateStoryPathParams = field()
    query_params: UpdateStoryQueryParams = field()
    request: UpdateStoryRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStoryResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    update_story_200_application_json_object: Optional[UpdateStory200ApplicationJSON] = field(default=None)
    
