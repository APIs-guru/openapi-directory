from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import participantrole_enum


@dataclass_json
@dataclass
class ChannelDefinition:
    channel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelId' }})
    participant_role: Optional[participantrole_enum.ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantRole' }})
    
