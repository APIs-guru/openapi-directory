from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AquaConfiguration:
    r"""AquaConfiguration
    The AQUA (Advanced Query Accelerator) configuration of the cluster.
    """
    
    aqua_configuration_status: Optional[AquaConfigurationStatusEnum] = field(default=None)
    aqua_status: Optional[AquaStatusEnum] = field(default=None)
    
