from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pipelineexecutionstatus_enum


@dataclass_json
@dataclass
class PipelineExecutionSummary:
    pipeline_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionArn' }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDescription' }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDisplayName' }})
    pipeline_execution_status: Optional[pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionStatus' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
