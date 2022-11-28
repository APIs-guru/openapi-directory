from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Task:
    r"""Task
    The type that defines the fields for the task details.
    """
    
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionDate') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    detail_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailHref') }})
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    upload_summary: Optional[UploadSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadSummary') }})
    
