from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleRPCPreconditionFailure:
    r"""GoogleRPCPreconditionFailure
    Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.
    """
    
    violations: Optional[List[GoogleRPCPreconditionFailureViolation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
