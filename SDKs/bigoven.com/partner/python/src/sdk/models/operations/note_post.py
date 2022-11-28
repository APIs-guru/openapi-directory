from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NotePostPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NotePostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api2_controllers_web_api_note_controller_note_request: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api2_controllers_web_api_note_controller_note_request1: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api2_controllers_web_api_note_controller_note_request2: Optional[shared.Api2ControllersWebAPINoteControllerNoteRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class NotePostRequest:
    path_params: NotePostPathParams = field()
    request: NotePostRequests = field()
    

@dataclass
class NotePostResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_recipe_note: Optional[shared.BigOvenModelApi2RecipeNote] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
