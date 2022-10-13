from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import describeactivationsfilterkeys_enum


@dataclass_json
@dataclass
class DescribeActivationsFilter:
    filter_key: Optional[describeactivationsfilterkeys_enum.DescribeActivationsFilterKeysEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterKey' }})
    filter_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterValues' }})
    
