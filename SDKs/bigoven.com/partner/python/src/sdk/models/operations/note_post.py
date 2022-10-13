from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NotePostPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NotePostRequests:
    api2_controllers_web_api_note_controller_note_request: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_note_controller_note_request1: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_note_controller_note_request2: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class NotePostRequest:
    path_params: NotePostPathParams = field(default=None)
    request: NotePostRequests = field(default=None)
    

@dataclass
class NotePostResponse:
    big_oven_model_api2_recipe_note: Optional[shared.BigOvenModelApi2RecipeNote] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
