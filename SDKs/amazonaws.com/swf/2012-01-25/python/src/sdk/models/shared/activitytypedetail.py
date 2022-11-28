from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityTypeDetail:
    r"""ActivityTypeDetail
    Detailed information about an activity type.
    """
    
    configuration: ActivityTypeConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    type_info: ActivityTypeInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfo') }})
    
