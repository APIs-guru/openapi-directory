from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProjectDuplicateRequestIncludeEnum(str, Enum):
    MEMBERS = "members"
    NOTES = "notes"
    FORMS = "forms"
    TASK_NOTES = "task_notes"
    TASK_ASSIGNEE = "task_assignee"
    TASK_SUBTASKS = "task_subtasks"
    TASK_ATTACHMENTS = "task_attachments"
    TASK_DATES = "task_dates"
    TASK_DEPENDENCIES = "task_dependencies"
    TASK_FOLLOWERS = "task_followers"
    TASK_TAGS = "task_tags"
    TASK_PROJECTS = "task_projects"


@dataclass_json
@dataclass
class ProjectDuplicateRequestScheduleDates:
    due_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on' }})
    should_skip_weekends: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'should_skip_weekends' }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on' }})
    

@dataclass_json
@dataclass
class ProjectDuplicateRequest:
    include: Optional[ProjectDuplicateRequestIncludeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schedule_dates: Optional[ProjectDuplicateRequestScheduleDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_dates' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    
