from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edgepackagingjobstatus_enum
from . import edgeoutputconfig
from . import edgepresetdeploymentoutput


@dataclass_json
@dataclass
class DescribeEdgePackagingJobResponse:
    compilation_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edge_packaging_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobArn' }})
    edge_packaging_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobName' }})
    edge_packaging_job_status: edgepackagingjobstatus_enum.EdgePackagingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobStatus' }})
    edge_packaging_job_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobStatusMessage' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArtifact' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSignature' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    output_config: Optional[edgeoutputconfig.EdgeOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    preset_deployment_output: Optional[edgepresetdeploymentoutput.EdgePresetDeploymentOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PresetDeploymentOutput' }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceKey' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
