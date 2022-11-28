from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelSummary:
    r"""ChannelSummary
    Summary information about a channel.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized') }})
    latency_mode: Optional[ChannelLatencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latencyMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recording_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingConfigurationArn') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
