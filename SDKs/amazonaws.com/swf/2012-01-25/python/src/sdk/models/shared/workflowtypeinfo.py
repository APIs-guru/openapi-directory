from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import registrationstatus_enum
from . import workflowtype


@dataclass_json
@dataclass
class WorkflowTypeInfo:
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deprecation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: registrationstatus_enum.RegistrationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
