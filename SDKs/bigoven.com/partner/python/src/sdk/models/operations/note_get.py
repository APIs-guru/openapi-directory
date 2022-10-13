from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NoteGetPathParams:
    note_id: int = field(default=None, metadata={'path_param': { 'field_name': 'noteId', 'style': 'simple', 'explode': False }})
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteGetRequest:
    path_params: NoteGetPathParams = field(default=None)
    

@dataclass
class NoteGetResponse:
    big_oven_model_api_recipe_note: Optional[shared.BigOvenModelAPIRecipeNote] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
