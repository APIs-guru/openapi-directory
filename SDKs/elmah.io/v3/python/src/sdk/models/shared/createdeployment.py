from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDeployment:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    log_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logId' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
