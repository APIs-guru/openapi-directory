from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RenameFolderPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'folder_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RenameFolderRequestBodyRenameFolderData:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class RenameFolderSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RenameFolderRequest:
    path_params: RenameFolderPathParams = field(default=None)
    request: RenameFolderRequestBodyRenameFolderData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RenameFolderSecurity = field(default=None)
    

@dataclass
class RenameFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    
