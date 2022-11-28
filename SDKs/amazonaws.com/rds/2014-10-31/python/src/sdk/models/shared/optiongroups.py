from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroups:
    r"""OptionGroups
    List of option groups.
    """
    
    marker: Optional[str] = field(default=None)
    option_groups_list: Optional[List[OptionGroup]] = field(default=None)
    
