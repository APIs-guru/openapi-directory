from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamhealth_enum
from . import streamstate_enum


@dataclass_json
@dataclass
class Stream:
    channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelArn' }})
    health: Optional[streamhealth_enum.StreamHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    playback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbackUrl' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[streamstate_enum.StreamStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    viewer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewerCount' }})
    
