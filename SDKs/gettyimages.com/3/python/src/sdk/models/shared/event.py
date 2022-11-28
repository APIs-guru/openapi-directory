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
class Event:
    child_event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_event_count') }})
    editorial_segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_segments') }})
    hero_image: Optional[HeroImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hero_image') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_count') }})
    location: Optional[LocationEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
