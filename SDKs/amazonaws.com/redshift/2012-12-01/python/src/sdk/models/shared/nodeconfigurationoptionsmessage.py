from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class NodeConfigurationOptionsMessage:
    marker: Optional[str] = field(default=None)
    node_configuration_option_list: Optional[List[NodeConfigurationOption]] = field(default=None)
    
