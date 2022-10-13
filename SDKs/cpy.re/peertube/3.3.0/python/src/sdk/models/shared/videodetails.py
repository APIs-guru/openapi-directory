from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import videostreamingplaylists


@dataclass_json
@dataclass
class VideoDetailsScheduledUpdate:
    privacy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    update_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class VideoDetailsUserHistory:
    current_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentTime' }})
    

@dataclass_json
@dataclass
class VideoDetails:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    blacklisted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blacklisted' }})
    blacklisted_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blacklistedReason' }})
    category: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    channel: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    comments_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentsEnabled' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    description_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptionPath' }})
    dislikes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dislikes' }})
    download_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadEnabled' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    embed_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedPath' }})
    files: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_live: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLive' }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocal' }})
    language: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    licence: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licence' }})
    likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nsfw: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsfw' }})
    originally_published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originallyPublishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    preview_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewPath' }})
    privacy: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_update: Optional[VideoDetailsScheduledUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledUpdate' }})
    short_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortUUID' }})
    state: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    streaming_playlists: Optional[List[videostreamingplaylists.VideoStreamingPlaylists]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingPlaylists' }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnail_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailPath' }})
    tracker_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackerUrls' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_history: Optional[VideoDetailsUserHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userHistory' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    wait_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitTranscoding' }})
    
