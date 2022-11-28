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
class ParallelismConfigurationUpdate:
    r"""ParallelismConfigurationUpdate
    Describes updates to parameters for how an application executes multiple tasks simultaneously.
    """
    
    auto_scaling_enabled_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingEnabledUpdate') }})
    configuration_type_update: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationTypeUpdate') }})
    parallelism_per_kpu_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismPerKPUUpdate') }})
    parallelism_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismUpdate') }})
    
