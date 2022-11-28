from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeUserResponse:
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    user: DescribedUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
