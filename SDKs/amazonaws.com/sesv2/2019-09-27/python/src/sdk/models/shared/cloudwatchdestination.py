from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchDestination:
    r"""CloudWatchDestination
    An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
    """
    
    dimension_configurations: List[CloudWatchDimensionConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionConfigurations') }})
    
