from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateHsmConfigurationResult:
    hsm_configuration: Optional[HsmConfiguration] = field(default=None)
    
