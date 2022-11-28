from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentPropertyDescriptions:
    r"""EnvironmentPropertyDescriptions
    Describes the execution properties for an Apache Flink runtime.
    """
    
    property_group_descriptions: Optional[List[PropertyGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyGroupDescriptions') }})
    
