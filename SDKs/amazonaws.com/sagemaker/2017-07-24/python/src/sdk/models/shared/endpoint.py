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
class Endpoint:
    r"""Endpoint
    A hosted endpoint for real-time inference.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    endpoint_config_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigName') }})
    endpoint_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    endpoint_status: EndpointStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointStatus') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_capture_config: Optional[DataCaptureConfigSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataCaptureConfig') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    monitoring_schedules: Optional[List[MonitoringSchedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringSchedules') }})
    production_variants: Optional[List[ProductionVariantSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductionVariants') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
