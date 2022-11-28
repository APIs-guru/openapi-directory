from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnableAddOnRequest:
    add_on_request: AddOnRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnRequest') }})
    resource_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
