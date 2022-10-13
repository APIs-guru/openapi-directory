from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import uploadsummary


@dataclass_json
@dataclass
class Task:
    completion_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionDate' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    detail_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailHref' }})
    feed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedType' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    upload_summary: Optional[uploadsummary.UploadSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadSummary' }})
    
