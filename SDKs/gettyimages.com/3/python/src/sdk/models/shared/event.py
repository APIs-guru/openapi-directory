from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import heroimage
from . import locationevent


@dataclass_json
@dataclass
class Event:
    child_event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'child_event_count' }})
    editorial_segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorial_segments' }})
    hero_image: Optional[heroimage.HeroImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hero_image' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_count' }})
    location: Optional[locationevent.LocationEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
