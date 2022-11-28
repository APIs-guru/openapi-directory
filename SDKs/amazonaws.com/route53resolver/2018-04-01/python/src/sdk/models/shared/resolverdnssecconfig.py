from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolverDnssecConfig:
    r"""ResolverDnssecConfig
    A complex type that contains information about a configuration for DNSSEC validation.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    validation_status: Optional[ResolverDnssecValidationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatus') }})
    
