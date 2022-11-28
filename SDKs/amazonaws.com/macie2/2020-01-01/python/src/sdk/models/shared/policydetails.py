from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyDetails:
    r"""PolicyDetails
    Provides the details of a policy finding.
    """
    
    action: Optional[FindingAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    actor: Optional[FindingActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    
