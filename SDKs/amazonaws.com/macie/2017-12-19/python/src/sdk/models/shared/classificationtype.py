from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationType:
    r"""ClassificationType
    The classification type that Amazon Macie Classic applies to the associated S3 resources. 
    """
    
    continuous: S3ContinuousClassificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous') }})
    one_time: S3OneTimeClassificationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTime') }})
    
