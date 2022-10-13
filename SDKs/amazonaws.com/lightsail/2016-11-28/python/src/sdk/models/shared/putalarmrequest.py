from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import contactprotocol_enum
from . import metricname_enum
from . import alarmstate_enum
from . import treatmissingdata_enum


@dataclass_json
@dataclass
class PutAlarmRequest:
    alarm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmName' }})
    comparison_operator: comparisonoperator_enum.ComparisonOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonOperator' }})
    contact_protocols: Optional[List[contactprotocol_enum.ContactProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactProtocols' }})
    datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointsToAlarm' }})
    evaluation_periods: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationPeriods' }})
    metric_name: metricname_enum.MetricNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    monitored_resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResourceName' }})
    notification_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationEnabled' }})
    notification_triggers: Optional[List[alarmstate_enum.AlarmStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTriggers' }})
    threshold: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    treat_missing_data: Optional[treatmissingdata_enum.TreatMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatMissingData' }})
    
