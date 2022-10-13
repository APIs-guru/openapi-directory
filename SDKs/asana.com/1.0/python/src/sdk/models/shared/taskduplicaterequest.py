from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TaskDuplicateRequestIncludeEnum(str, Enum):
    NOTES = "notes"
    ASSIGNEE = "assignee"
    SUBTASKS = "subtasks"
    ATTACHMENTS = "attachments"
    TAGS = "tags"
    FOLLOWERS = "followers"
    PROJECTS = "projects"
    DATES = "dates"
    DEPENDENCIES = "dependencies"
    PARENT = "parent"


@dataclass_json
@dataclass
class TaskDuplicateRequest:
    include: Optional[TaskDuplicateRequestIncludeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
