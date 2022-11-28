from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stream:
    r"""Stream
    Specifies a live video stream that has been ingested and distributed.
    """
    
    channel_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelArn') }})
    health: Optional[StreamHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    playback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbackUrl') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[StreamStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    viewer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewerCount') }})
    
