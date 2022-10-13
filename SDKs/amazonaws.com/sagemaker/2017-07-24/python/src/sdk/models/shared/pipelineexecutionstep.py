from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cachehitresult
from . import pipelineexecutionstepmetadata
from . import stepstatus_enum


@dataclass_json
@dataclass
class PipelineExecutionStep:
    cache_hit_result: Optional[cachehitresult.CacheHitResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheHitResult' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    metadata: Optional[pipelineexecutionstepmetadata.PipelineExecutionStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepName' }})
    step_status: Optional[stepstatus_enum.StepStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepStatus' }})
    
