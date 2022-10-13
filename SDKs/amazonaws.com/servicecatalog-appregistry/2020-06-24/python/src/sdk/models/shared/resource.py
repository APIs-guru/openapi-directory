from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceintegrations


@dataclass_json
@dataclass
class Resource:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    association_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    integrations: Optional[resourceintegrations.ResourceIntegrations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
