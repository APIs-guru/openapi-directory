from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    include: Optional[TaskDuplicateRequestIncludeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
