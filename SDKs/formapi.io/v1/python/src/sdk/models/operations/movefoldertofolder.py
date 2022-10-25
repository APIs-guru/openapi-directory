from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MoveFolderToFolderPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'folder_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MoveFolderToFolderMoveFolderData:
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    

@dataclass
class MoveFolderToFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class MoveFolderToFolderRequest:
    path_params: MoveFolderToFolderPathParams = field(default=None)
    request: MoveFolderToFolderMoveFolderData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: MoveFolderToFolderSecurity = field(default=None)
    

@dataclass_json
@dataclass
class MoveFolderToFolderFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass
class MoveFolderToFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    folder: Optional[MoveFolderToFolderFolder] = field(default=None)
    
