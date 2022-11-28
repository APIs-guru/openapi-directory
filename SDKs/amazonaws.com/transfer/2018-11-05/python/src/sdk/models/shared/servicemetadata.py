from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceMetadata:
    r"""ServiceMetadata
    A container object for the session details associated with a workflow.
    """
    
    user_details: UserDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDetails') }})
    
