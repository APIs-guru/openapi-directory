from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NoteGetNotesPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteGetNotesQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class NoteGetNotesRequest:
    path_params: NoteGetNotesPathParams = field()
    query_params: NoteGetNotesQueryParams = field()
    

@dataclass
class NoteGetNotesResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_recipe_note_list: Optional[shared.BigOvenModelAPIRecipeNoteList] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
