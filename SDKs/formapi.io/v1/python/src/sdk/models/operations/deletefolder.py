from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteFolderPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'folder_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class DeleteFolderFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class DeleteFolderRequest:
    path_params: DeleteFolderPathParams = field()
    security: DeleteFolderSecurity = field()
    

@dataclass
class DeleteFolderResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    folder: Optional[DeleteFolderFolder] = field(default=None)
    
