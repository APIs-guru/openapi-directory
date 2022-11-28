from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CampaignLimits:
    r"""CampaignLimits
    For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
    """
    
    daily: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Daily') }})
    maximum_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumDuration') }})
    messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessagesPerSecond') }})
    session: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Session') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    
