from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import flowexecutionstatus_enum


@dataclass_json
@dataclass
class FlowExecutionSummary:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flow_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowExecutionId' }})
    flow_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowTemplateId' }})
    status: Optional[flowexecutionstatus_enum.FlowExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    system_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemInstanceId' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
