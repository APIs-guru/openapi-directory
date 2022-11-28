from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RenameFolderPathParams:
    folder_id: str = field(metadata={'path_param': { 'field_name': 'folder_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RenameFolderRenameFolderData:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class RenameFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RenameFolderRequest:
    path_params: RenameFolderPathParams = field()
    request: RenameFolderRenameFolderData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: RenameFolderSecurity = field()
    

@dataclass
class RenameFolderResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    
