from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import importdestination
from . import jobstatus_enum


@dataclass_json
@dataclass
class ImportJobSummary:
    created_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    import_destination: Optional[importdestination.ImportDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportDestination' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    
