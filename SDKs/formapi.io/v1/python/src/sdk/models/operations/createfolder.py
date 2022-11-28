from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateFolderCreateFolderDataFolder:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    

@dataclass_json
@dataclass
class CreateFolderCreateFolderData:
    folder: CreateFolderCreateFolderDataFolder = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    

@dataclass
class CreateFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class CreateFolderFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class CreateFolderRequest:
    request: CreateFolderCreateFolderData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFolderSecurity = field()
    

@dataclass
class CreateFolderResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    folder: Optional[CreateFolderFolder] = field(default=None)
    
