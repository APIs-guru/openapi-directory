from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotationconsolidationconfig
from . import publicworkforcetaskprice
from . import uiconfig


@dataclass_json
@dataclass
class HumanTaskConfig:
    annotation_consolidation_config: annotationconsolidationconfig.AnnotationConsolidationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnotationConsolidationConfig' }})
    max_concurrent_task_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentTaskCount' }})
    number_of_human_workers_per_data_object: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfHumanWorkersPerDataObject' }})
    pre_human_task_lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreHumanTaskLambdaArn' }})
    public_workforce_task_price: Optional[publicworkforcetaskprice.PublicWorkforceTaskPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicWorkforceTaskPrice' }})
    task_availability_lifetime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskAvailabilityLifetimeInSeconds' }})
    task_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskDescription' }})
    task_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskKeywords' }})
    task_time_limit_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskTimeLimitInSeconds' }})
    task_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskTitle' }})
    ui_config: uiconfig.UIConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UiConfig' }})
    workteam_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamArn' }})
    
