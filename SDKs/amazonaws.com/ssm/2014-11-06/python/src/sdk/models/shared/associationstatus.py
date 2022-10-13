from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import associationstatusname_enum


@dataclass_json
@dataclass
class AssociationStatus:
    additional_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalInfo' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    name: associationstatusname_enum.AssociationStatusNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
