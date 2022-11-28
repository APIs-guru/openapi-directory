from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstallationTokenPermissions:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    issues: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    
class InstallationTokenRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class InstallationToken:
    r"""InstallationToken
    Authentication token for a GitHub App installed on a user or org.
    """
    
    expires_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    has_multiple_single_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_multiple_single_files') }})
    permissions: Optional[InstallationTokenPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories: Optional[List[Repository]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repository_selection: Optional[InstallationTokenRepositorySelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file') }})
    single_file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_paths') }})
    
