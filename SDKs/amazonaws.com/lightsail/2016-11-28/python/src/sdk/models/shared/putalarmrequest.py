from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAlarmRequest:
    alarm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    evaluation_periods: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationPeriods') }})
    metric_name: MetricNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    monitored_resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResourceName') }})
    threshold: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    contact_protocols: Optional[List[ContactProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactProtocols') }})
    datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointsToAlarm') }})
    notification_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEnabled') }})
    notification_triggers: Optional[List[AlarmStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTriggers') }})
    treat_missing_data: Optional[TreatMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatMissingData') }})
    
