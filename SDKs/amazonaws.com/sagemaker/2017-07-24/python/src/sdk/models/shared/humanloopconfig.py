from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publicworkforcetaskprice


@dataclass_json
@dataclass
class HumanLoopConfig:
    human_task_ui_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanTaskUiArn' }})
    public_workforce_task_price: Optional[publicworkforcetaskprice.PublicWorkforceTaskPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicWorkforceTaskPrice' }})
    task_availability_lifetime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskAvailabilityLifetimeInSeconds' }})
    task_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskCount' }})
    task_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskDescription' }})
    task_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskKeywords' }})
    task_time_limit_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskTimeLimitInSeconds' }})
    task_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskTitle' }})
    workteam_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamArn' }})
    
