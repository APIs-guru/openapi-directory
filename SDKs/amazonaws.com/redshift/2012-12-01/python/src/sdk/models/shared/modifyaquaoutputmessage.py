from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyAquaOutputMessage:
    aqua_configuration: Optional[AquaConfiguration] = field(default=None)
    
