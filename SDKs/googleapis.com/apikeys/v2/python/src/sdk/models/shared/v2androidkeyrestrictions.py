from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V2AndroidKeyRestrictions:
    r"""V2AndroidKeyRestrictions
    The Android apps that are allowed to use the key.
    """
    
    allowed_applications: Optional[List[V2AndroidApplication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedApplications') }})
    
