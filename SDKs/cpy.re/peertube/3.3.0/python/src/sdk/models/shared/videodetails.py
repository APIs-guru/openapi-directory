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
class VideoDetailsScheduledUpdate:
    update_at: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateAt'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    privacy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass_json
@dataclass
class VideoDetailsUserHistory:
    current_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentTime') }})
    

@dataclass_json
@dataclass
class VideoDetails:
    account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    blacklisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklisted') }})
    blacklisted_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklistedReason') }})
    category: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    channel: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    comments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentsEnabled') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionPath') }})
    dislikes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dislikes') }})
    download_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadEnabled') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    embed_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedPath') }})
    files: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLive') }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocal') }})
    language: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    licence: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licence') }})
    likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nsfw: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsfw') }})
    originally_published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originallyPublishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    preview_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewPath') }})
    privacy: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_update: Optional[VideoDetailsScheduledUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledUpdate') }})
    short_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortUUID') }})
    state: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    streaming_playlists: Optional[List[VideoStreamingPlaylists]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingPlaylists') }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnail_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailPath') }})
    tracker_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackerUrls') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_history: Optional[VideoDetailsUserHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userHistory') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    wait_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitTranscoding') }})
    
