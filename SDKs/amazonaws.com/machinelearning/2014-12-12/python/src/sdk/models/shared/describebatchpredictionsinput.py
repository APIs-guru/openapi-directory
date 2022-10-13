from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import batchpredictionfiltervariable_enum
from . import sortorder_enum


@dataclass_json
@dataclass
class DescribeBatchPredictionsInput:
    eq: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EQ' }})
    filter_variable: Optional[batchpredictionfiltervariable_enum.BatchPredictionFilterVariableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterVariable' }})
    ge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GE' }})
    gt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GT' }})
    le: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LE' }})
    lt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LT' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    ne: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NE' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    sort_order: Optional[sortorder_enum.SortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    
