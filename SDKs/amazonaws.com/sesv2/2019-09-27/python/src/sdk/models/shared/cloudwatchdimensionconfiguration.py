from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchDimensionConfiguration:
    r"""CloudWatchDimensionConfiguration
    An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
    """
    
    default_dimension_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultDimensionValue') }})
    dimension_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value_source: DimensionValueSourceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValueSource') }})
    
