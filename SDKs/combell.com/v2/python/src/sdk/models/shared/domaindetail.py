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
class DomainDetail:
    can_toggle_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_toggle_renew') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_name') }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name_servers: Optional[List[NameServer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name_servers') }})
    registrant: Optional[Registrant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrant') }})
    will_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('will_renew') }})
    
