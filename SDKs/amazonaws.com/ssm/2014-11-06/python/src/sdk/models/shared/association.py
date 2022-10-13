from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationoverview
from . import target


@dataclass_json
@dataclass
class Association:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationName' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    last_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overview: Optional[associationoverview.AssociationOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overview' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
