from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import outputsource


@dataclass_json
@dataclass
class AssociationExecutionTarget:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    detailed_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedStatus' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    last_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_source: Optional[outputsource.OutputSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputSource' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
