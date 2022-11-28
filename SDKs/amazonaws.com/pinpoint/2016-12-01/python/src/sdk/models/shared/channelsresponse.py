from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelsResponse:
    r"""ChannelsResponse
    Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
    """
    
    channels: dict[str, ChannelResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    
