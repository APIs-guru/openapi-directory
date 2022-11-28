from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceAccessControlAttributeConfiguration:
    r"""InstanceAccessControlAttributeConfiguration
    Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
    """
    
    access_control_attributes: List[AccessControlAttribute] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessControlAttributes') }})
    
