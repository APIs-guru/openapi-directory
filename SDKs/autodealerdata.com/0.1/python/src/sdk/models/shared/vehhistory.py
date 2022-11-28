from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VehHistory:
    dealer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealerName') }})
    first_seen: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeen'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    miles: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    new: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
