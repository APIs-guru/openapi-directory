from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCompilationJobResponse:
    compilation_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobArn') }})
    compilation_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobName') }})
    compilation_job_status: CompilationJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobStatus') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    input_config: InputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputConfig') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifacts: ModelArtifacts = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArtifacts') }})
    output_config: OutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    compilation_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compilation_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inference_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceImage') }})
    model_digests: Optional[ModelDigests] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelDigests') }})
    vpc_config: Optional[NeoVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
