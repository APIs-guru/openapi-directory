from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mailboxexportjobstate_enum


@dataclass_json
@dataclass
class MailboxExportJob:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    estimated_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedProgress' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Path' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[mailboxexportjobstate_enum.MailboxExportJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
