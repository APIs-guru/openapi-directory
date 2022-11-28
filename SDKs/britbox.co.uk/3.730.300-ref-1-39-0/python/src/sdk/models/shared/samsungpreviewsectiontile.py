from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SamsungPreviewSectionTile:
    action_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_data') }})
    image_ratio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_ratio') }})
    image_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    is_playable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playable') }})
    display_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_from'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_until'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
