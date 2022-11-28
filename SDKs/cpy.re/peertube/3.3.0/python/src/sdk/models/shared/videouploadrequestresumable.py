from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoUploadRequestResumable:
    channel_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    filename: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    category: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    comments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentsEnabled') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    download_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadEnabled') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    licence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licence') }})
    nsfw: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsfw') }})
    originally_published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originallyPublishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    previewfile: Optional[bytes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewfile') }})
    privacy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    schedule_update: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleUpdate') }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnailfile: Optional[bytes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailfile') }})
    wait_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitTranscoding') }})
    
