from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NoteGetPathParams:
    note_id: int = field(metadata={'path_param': { 'field_name': 'noteId', 'style': 'simple', 'explode': False }})
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteGetRequest:
    path_params: NoteGetPathParams = field()
    

@dataclass
class NoteGetResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_recipe_note: Optional[shared.BigOvenModelAPIRecipeNote] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
