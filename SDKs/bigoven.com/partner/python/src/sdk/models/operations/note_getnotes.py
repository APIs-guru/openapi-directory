from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class NoteGetNotesPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteGetNotesQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class NoteGetNotesRequest:
    path_params: NoteGetNotesPathParams = field(default=None)
    query_params: NoteGetNotesQueryParams = field(default=None)
    

@dataclass
class NoteGetNotesResponse:
    big_oven_model_api_recipe_note_list: Optional[shared.BigOvenModelAPIRecipeNoteList] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
