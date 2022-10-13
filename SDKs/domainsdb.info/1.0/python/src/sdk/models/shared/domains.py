from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mx_records


@dataclass_json
@dataclass
class Domains:
    a: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'A' }})
    cname: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CNAME' }})
    mx: Optional[List[mx_records.MxRecords]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MX' }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NS' }})
    txt: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TXT' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    is_dead: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDead' }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
