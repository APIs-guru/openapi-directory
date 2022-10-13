from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BlacklistEntry:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    listing_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListingTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rbl_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RblName' }})
    
