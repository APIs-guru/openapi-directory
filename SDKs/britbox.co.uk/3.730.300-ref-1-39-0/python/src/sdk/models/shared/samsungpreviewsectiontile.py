from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamsungPreviewSectionTile:
    action_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_data' }})
    display_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_from', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_ratio: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_ratio' }})
    image_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    is_playable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_playable' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
