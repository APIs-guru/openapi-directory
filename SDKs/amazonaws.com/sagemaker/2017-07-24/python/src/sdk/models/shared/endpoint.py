from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datacaptureconfigsummary
from . import endpointstatus_enum
from . import monitoringschedule
from . import productionvariantsummary
from . import tag


@dataclass_json
@dataclass
class Endpoint:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_capture_config: Optional[datacaptureconfigsummary.DataCaptureConfigSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataCaptureConfig' }})
    endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    endpoint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    endpoint_status: endpointstatus_enum.EndpointStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointStatus' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_schedules: Optional[List[monitoringschedule.MonitoringSchedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringSchedules' }})
    production_variants: Optional[List[productionvariantsummary.ProductionVariantSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionVariants' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
