from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociationExecution:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detailed_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedStatus' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    last_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_count_by_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCountByStatus' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
