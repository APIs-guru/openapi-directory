from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import pipelineexecutionstatus_enum
from . import pipelineexperimentconfig
from . import parameter


@dataclass_json
@dataclass
class PipelineExecution:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineArn' }})
    pipeline_execution_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionArn' }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDescription' }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDisplayName' }})
    pipeline_execution_status: Optional[pipelineexecutionstatus_enum.PipelineExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionStatus' }})
    pipeline_experiment_config: Optional[pipelineexperimentconfig.PipelineExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExperimentConfig' }})
    pipeline_parameters: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineParameters' }})
    
