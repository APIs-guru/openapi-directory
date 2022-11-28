from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendQuota:
    r"""SendQuota
    An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region.
    """
    
    max24_hour_send: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max24HourSend') }})
    max_send_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSendRate') }})
    sent_last24_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentLast24Hours') }})
    
