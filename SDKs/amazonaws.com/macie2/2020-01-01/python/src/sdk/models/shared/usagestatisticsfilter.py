from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usagestatisticsfiltercomparator_enum
from . import usagestatisticsfilterkey_enum


@dataclass_json
@dataclass
class UsageStatisticsFilter:
    comparator: Optional[usagestatisticsfiltercomparator_enum.UsageStatisticsFilterComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    key: Optional[usagestatisticsfilterkey_enum.UsageStatisticsFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
