from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import suppresseddestinationattributes
from . import suppressionlistreason_enum


@dataclass_json
@dataclass
class SuppressedDestination:
    attributes: Optional[suppresseddestinationattributes.SuppressedDestinationAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    email_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailAddress' }})
    last_update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: suppressionlistreason_enum.SuppressionListReasonEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    
