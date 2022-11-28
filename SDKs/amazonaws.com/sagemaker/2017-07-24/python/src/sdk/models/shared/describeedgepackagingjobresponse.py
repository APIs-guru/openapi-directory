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
class DescribeEdgePackagingJobResponse:
    edge_packaging_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobArn') }})
    edge_packaging_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobName') }})
    edge_packaging_job_status: EdgePackagingJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobStatus') }})
    compilation_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilationJobName') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edge_packaging_job_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdgePackagingJobStatusMessage') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelArtifact') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSignature') }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    output_config: Optional[EdgeOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    preset_deployment_output: Optional[EdgePresetDeploymentOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetDeploymentOutput') }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKey') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
