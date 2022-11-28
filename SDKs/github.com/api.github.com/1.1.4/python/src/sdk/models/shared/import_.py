from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportProjectChoices:
    human_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('human_name') }})
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    vcs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    
class ImportStatusEnum(str, Enum):
    AUTH = "auth"
    ERROR = "error"
    NONE = "none"
    DETECTING = "detecting"
    CHOOSE = "choose"
    AUTH_FAILED = "auth_failed"
    IMPORTING = "importing"
    MAPPING = "mapping"
    WAITING_TO_PUSH = "waiting_to_push"
    PUSHING = "pushing"
    COMPLETE = "complete"
    SETUP = "setup"
    UNKNOWN = "unknown"
    DETECTION_FOUND_MULTIPLE = "detection_found_multiple"
    DETECTION_FOUND_NOTHING = "detection_found_nothing"
    DETECTION_NEEDS_AUTH = "detection_needs_auth"


@dataclass_json
@dataclass
class Import:
    r"""Import
    A repository import from an external source.
    """
    
    authors_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authors_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    repository_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    status: ImportStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    vcs: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    vcs_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_url') }})
    authors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authors_count') }})
    commit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_count') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    failed_step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_step') }})
    has_large_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_large_files') }})
    import_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_percent') }})
    large_files_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_files_count') }})
    large_files_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('large_files_size') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    project_choices: Optional[List[ImportProjectChoices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_choices') }})
    push_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push_percent') }})
    status_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_text') }})
    svc_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svc_root') }})
    svn_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('svn_root') }})
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    use_lfs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_lfs') }})
    
