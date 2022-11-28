from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Settings:
    r"""Settings
    Customer-level settings.
    """
    
    notifications: Optional[List[Notification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    
