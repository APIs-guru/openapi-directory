from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Video:
    assets: Optional[VideoAssets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    metadata: Optional[List[Metadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    mp4_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mp4Support') }})
    panoramic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panoramic') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    published_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt') }})
    source: Optional[VideoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
