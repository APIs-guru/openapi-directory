from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportProjectChoices:
    human_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'human_name' }})
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tfvc_project' }})
    vcs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs' }})
    
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
    authors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authors_count' }})
    authors_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authors_url' }})
    commit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_count' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    failed_step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_step' }})
    has_large_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_large_files' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    import_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_percent' }})
    large_files_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_files_count' }})
    large_files_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'large_files_size' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    project_choices: Optional[List[ImportProjectChoices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_choices' }})
    push_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'push_percent' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_url' }})
    status: ImportStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_text' }})
    svc_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'svc_root' }})
    svn_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'svn_root' }})
    tfvc_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tfvc_project' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    use_lfs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_lfs' }})
    vcs: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs' }})
    vcs_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_url' }})
    
