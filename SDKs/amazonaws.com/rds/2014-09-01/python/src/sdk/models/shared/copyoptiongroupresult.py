from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CopyOptionGroupResult:
    option_group: Optional[OptionGroup] = field(default=None)
    
