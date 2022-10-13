from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inferenceexecutionstatus_enum


@dataclass_json
@dataclass
class ListInferenceExecutionsRequest:
    data_end_time_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataEndTimeBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_start_time_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataStartTimeAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inference_scheduler_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[inferenceexecutionstatus_enum.InferenceExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
