from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDimensionKeysRequest:
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_by: DimensionGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupBy') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    metric: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metric') }})
    service_type: ServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceType') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partition_by: Optional[DimensionGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionBy') }})
    period_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodInSeconds') }})
    
