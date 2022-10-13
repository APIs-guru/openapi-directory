from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channeltargetinfo
from . import contacttargetinfo


@dataclass_json
@dataclass
class Target:
    channel_target_info: Optional[channeltargetinfo.ChannelTargetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelTargetInfo' }})
    contact_target_info: Optional[contacttargetinfo.ContactTargetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactTargetInfo' }})
    
