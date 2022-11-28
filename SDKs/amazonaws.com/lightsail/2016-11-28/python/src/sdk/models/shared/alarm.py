from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Alarm:
    r"""Alarm
    <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms\">Alarms in Amazon Lightsail</a>.</p>
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    comparison_operator: Optional[ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    contact_protocols: Optional[List[ContactProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactProtocols') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointsToAlarm') }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationPeriods') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metric_name: Optional[MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    monitored_resource_info: Optional[MonitoredResourceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResourceInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEnabled') }})
    notification_triggers: Optional[List[AlarmStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTriggers') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    state: Optional[AlarmStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    statistic: Optional[MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    treat_missing_data: Optional[TreatMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatMissingData') }})
    unit: Optional[MetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
