from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensiongroup
from . import dimensiongroup
from . import servicetype_enum


@dataclass_json
@dataclass
class DescribeDimensionKeysRequest:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    group_by: dimensiongroup.DimensionGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupBy' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    metric: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metric' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    partition_by: Optional[dimensiongroup.DimensionGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionBy' }})
    period_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodInSeconds' }})
    service_type: servicetype_enum.ServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
