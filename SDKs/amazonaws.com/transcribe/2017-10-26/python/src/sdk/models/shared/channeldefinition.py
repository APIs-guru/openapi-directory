from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelDefinition:
    r"""ChannelDefinition
    For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio channel that belongs to the customer.
    """
    
    channel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelId') }})
    participant_role: Optional[ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    
