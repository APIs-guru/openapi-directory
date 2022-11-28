from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanLoopConfig:
    r"""HumanLoopConfig
    Describes the work to be performed by human workers.
    """
    
    human_task_ui_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanTaskUiArn') }})
    task_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskCount') }})
    task_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDescription') }})
    task_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskTitle') }})
    workteam_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamArn') }})
    public_workforce_task_price: Optional[PublicWorkforceTaskPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicWorkforceTaskPrice') }})
    task_availability_lifetime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskAvailabilityLifetimeInSeconds') }})
    task_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskKeywords') }})
    task_time_limit_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskTimeLimitInSeconds') }})
    
