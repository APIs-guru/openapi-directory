from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repository


@dataclass_json
@dataclass
class InstallationTokenPermissions:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    issues: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file' }})
    
class InstallationTokenRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class InstallationToken:
    expires_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    has_multiple_single_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_multiple_single_files' }})
    permissions: Optional[InstallationTokenPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories: Optional[List[repository.Repository]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_selection: Optional[InstallationTokenRepositorySelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file' }})
    single_file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file_paths' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
