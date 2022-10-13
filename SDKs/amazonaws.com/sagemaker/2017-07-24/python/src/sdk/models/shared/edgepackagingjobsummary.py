from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edgepackagingjobstatus_enum


@dataclass_json
@dataclass
class EdgePackagingJobSummary:
    compilation_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edge_packaging_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobArn' }})
    edge_packaging_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobName' }})
    edge_packaging_job_status: edgepackagingjobstatus_enum.EdgePackagingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobStatus' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    
