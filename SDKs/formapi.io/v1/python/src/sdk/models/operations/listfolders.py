from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListFoldersQueryParams:
    parent_folder_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_folder_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFoldersSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListFoldersFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_folder_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class ListFoldersRequest:
    query_params: ListFoldersQueryParams = field()
    security: ListFoldersSecurity = field()
    

@dataclass
class ListFoldersResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    folders: Optional[List[ListFoldersFolder]] = field(default=None)
    
