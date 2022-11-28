from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class NoteDeletePathParams:
    note_id: int = field(metadata={'path_param': { 'field_name': 'noteId', 'style': 'simple', 'explode': False }})
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteDeleteRequest:
    path_params: NoteDeletePathParams = field()
    

@dataclass
class NoteDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
