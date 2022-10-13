from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import constraints
from . import playercontext
from . import playercontext
from . import queueactivityreportevent_enum
from . import useractivity


@dataclass_json
@dataclass
class UpdateActivityRequest:
    constraints: Optional[constraints.Constraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    now_playing: Optional[playercontext.PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nowPlaying' }})
    previously_playing: Optional[playercontext.PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previouslyPlaying' }})
    report: queueactivityreportevent_enum.QueueActivityReportEventEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_activity: useractivity.UserActivity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userActivity' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
