from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanTaskConfig:
    r"""HumanTaskConfig
    Information required for human workers to complete a labeling task.
    """
    
    annotation_consolidation_config: AnnotationConsolidationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationConsolidationConfig') }})
    number_of_human_workers_per_data_object: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfHumanWorkersPerDataObject') }})
    pre_human_task_lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreHumanTaskLambdaArn') }})
    task_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDescription') }})
    task_time_limit_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskTimeLimitInSeconds') }})
    task_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskTitle') }})
    ui_config: UIConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UiConfig') }})
    workteam_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamArn') }})
    max_concurrent_task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentTaskCount') }})
    public_workforce_task_price: Optional[PublicWorkforceTaskPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicWorkforceTaskPrice') }})
    task_availability_lifetime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskAvailabilityLifetimeInSeconds') }})
    task_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskKeywords') }})
    
