from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import pipelinestatus_enum
from . import tag


@dataclass_json
@dataclass
class Pipeline:
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_run_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRunTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pipeline_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineArn' }})
    pipeline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDescription' }})
    pipeline_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDisplayName' }})
    pipeline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineName' }})
    pipeline_status: Optional[pipelinestatus_enum.PipelineStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineStatus' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
