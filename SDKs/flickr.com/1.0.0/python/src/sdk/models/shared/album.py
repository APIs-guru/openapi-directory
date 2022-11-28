from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Album:
    can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_comment') }})
    count_comments: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_comments') }})
    count_views: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_views') }})
    date_create: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_create') }})
    date_update: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_update') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('farm') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    photos: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    videos: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    
