from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateActivationRequest:
    default_instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultInstanceName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iam_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamRole' }})
    registration_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationLimit' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
