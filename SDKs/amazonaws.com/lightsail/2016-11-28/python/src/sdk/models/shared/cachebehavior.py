from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CacheBehavior:
    r"""CacheBehavior
    Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
    """
    
    behavior: Optional[BehaviorEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    
