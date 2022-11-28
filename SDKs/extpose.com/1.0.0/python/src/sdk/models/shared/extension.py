from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Extension:
    avg_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_rating') }})
    extension_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_id') }})
    install_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('install_count') }})
    prev_avg_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev_avg_rating') }})
    prev_install_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev_install_count') }})
    prev_rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev_rating_count') }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating_count') }})
    update_ts: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_ts'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
