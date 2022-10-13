from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitystate_enum
from . import resourcetype_enum


@dataclass_json
@dataclass
class Resource:
    disabled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    enabled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[entitystate_enum.EntityStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
