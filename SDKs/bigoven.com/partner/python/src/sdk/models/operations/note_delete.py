from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class NoteDeletePathParams:
    note_id: int = field(default=None, metadata={'path_param': { 'field_name': 'noteId', 'style': 'simple', 'explode': False }})
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class NoteDeleteRequest:
    path_params: NoteDeletePathParams = field(default=None)
    

@dataclass
class NoteDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
