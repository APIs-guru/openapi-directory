from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnablePolicyTypeRequest:
    policy_type: PolicyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    root_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootId') }})
    
