from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadata


@dataclass_json
@dataclass
class VideoCreatePayload:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    mp4_support: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mp4Support' }})
    panoramic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panoramic' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
