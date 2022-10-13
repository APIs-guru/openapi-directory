from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListFoldersQueryParams:
    parent_folder_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_folder_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFoldersSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListFoldersRequest:
    query_params: ListFoldersQueryParams = field(default=None)
    security: ListFoldersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListFolders200ApplicationJSONFolder:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_folder_id' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass
class ListFoldersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    folders: Optional[List[ListFolders200ApplicationJSONFolder]] = field(default=None)
    
