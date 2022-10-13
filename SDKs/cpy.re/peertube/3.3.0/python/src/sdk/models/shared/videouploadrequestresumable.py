from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoUploadRequestResumable:
    category: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    channel_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    comments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentsEnabled' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    download_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadEnabled' }})
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    licence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licence' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsfw: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsfw' }})
    originally_published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originallyPublishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    previewfile: Optional[bytes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewfile' }})
    privacy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    schedule_update: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleUpdate' }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnailfile: Optional[bytes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailfile' }})
    wait_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitTranscoding' }})
    
