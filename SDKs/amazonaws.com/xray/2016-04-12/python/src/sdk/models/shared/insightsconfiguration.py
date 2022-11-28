from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InsightsConfiguration:
    r"""InsightsConfiguration
    The structure containing configurations related to insights.
    """
    
    insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightsEnabled') }})
    notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationsEnabled') }})
    
