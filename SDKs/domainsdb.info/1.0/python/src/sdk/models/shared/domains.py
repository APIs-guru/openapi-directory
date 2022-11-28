from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Domains:
    a: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('A') }})
    cname: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CNAME') }})
    mx: Optional[List[MxRecords]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MX') }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NS') }})
    txt: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TXT') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    is_dead: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDead') }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
