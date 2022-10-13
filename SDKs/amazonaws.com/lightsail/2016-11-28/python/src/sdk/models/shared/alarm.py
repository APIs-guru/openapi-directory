from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import comparisonoperator_enum
from . import contactprotocol_enum
from . import resourcelocation
from . import metricname_enum
from . import monitoredresourceinfo
from . import alarmstate_enum
from . import resourcetype_enum
from . import alarmstate_enum
from . import metricstatistic_enum
from . import treatmissingdata_enum
from . import metricunit_enum


@dataclass_json
@dataclass
class Alarm:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    comparison_operator: Optional[comparisonoperator_enum.ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonOperator' }})
    contact_protocols: Optional[List[contactprotocol_enum.ContactProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactProtocols' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    datapoints_to_alarm: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapointsToAlarm' }})
    evaluation_periods: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationPeriods' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    metric_name: Optional[metricname_enum.MetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    monitored_resource_info: Optional[monitoredresourceinfo.MonitoredResourceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResourceInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationEnabled' }})
    notification_triggers: Optional[List[alarmstate_enum.AlarmStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTriggers' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    state: Optional[alarmstate_enum.AlarmStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    statistic: Optional[metricstatistic_enum.MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistic' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    treat_missing_data: Optional[treatmissingdata_enum.TreatMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatMissingData' }})
    unit: Optional[metricunit_enum.MetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
