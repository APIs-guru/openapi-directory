from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateFolderRequestBodyFolder:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    

@dataclass_json
@dataclass
class CreateFolderRequestBodyCreateFolderData:
    folder: CreateFolderRequestBodyFolder = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    

@dataclass
class CreateFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFolderRequest:
    request: CreateFolderRequestBodyCreateFolderData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFolderSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateFolder200ApplicationJSONFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass
class CreateFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    folder: Optional[CreateFolder200ApplicationJSONFolder] = field(default=None)
    
