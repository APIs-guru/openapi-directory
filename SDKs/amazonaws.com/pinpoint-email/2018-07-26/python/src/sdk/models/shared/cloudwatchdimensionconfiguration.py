from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import dimensionvaluesource_enum


@dataclass_json
@dataclass
class CloudWatchDimensionConfiguration:
    default_dimension_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultDimensionValue' }})
    dimension_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionName' }})
    dimension_value_source: dimensionvaluesource_enum.DimensionValueSourceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionValueSource' }})
    
