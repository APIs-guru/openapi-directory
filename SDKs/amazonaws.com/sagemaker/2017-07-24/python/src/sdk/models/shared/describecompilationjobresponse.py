from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compilationjobstatus_enum
from . import inputconfig
from . import modelartifacts
from . import modeldigests
from . import outputconfig
from . import stoppingcondition
from . import neovpcconfig


@dataclass_json
@dataclass
class DescribeCompilationJobResponse:
    compilation_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobArn' }})
    compilation_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    compilation_job_status: compilationjobstatus_enum.CompilationJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobStatus' }})
    compilation_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    inference_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceImage' }})
    input_config: inputconfig.InputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputConfig' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifacts: modelartifacts.ModelArtifacts = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArtifacts' }})
    model_digests: Optional[modeldigests.ModelDigests] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDigests' }})
    output_config: outputconfig.OutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    vpc_config: Optional[neovpcconfig.NeoVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
