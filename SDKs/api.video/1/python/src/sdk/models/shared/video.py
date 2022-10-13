from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import videoassets
from . import metadata
from . import videosource


@dataclass_json
@dataclass
class Video:
    assets: Optional[videoassets.VideoAssets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    mp4_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mp4Support' }})
    panoramic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panoramic' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    published_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt' }})
    source: Optional[videosource.VideoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    tags: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    
