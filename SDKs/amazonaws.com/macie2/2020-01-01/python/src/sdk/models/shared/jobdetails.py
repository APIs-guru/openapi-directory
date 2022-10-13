from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import isdefinedinjob_enum
from . import ismonitoredbyjob_enum


@dataclass_json
@dataclass
class JobDetails:
    is_defined_in_job: Optional[isdefinedinjob_enum.IsDefinedInJobEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefinedInJob' }})
    is_monitored_by_job: Optional[ismonitoredbyjob_enum.IsMonitoredByJobEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMonitoredByJob' }})
    last_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastJobId' }})
    last_job_run_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastJobRunTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
