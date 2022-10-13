from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PipelineSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_execution_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineArn' }})
    pipeline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDescription' }})
    pipeline_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDisplayName' }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
