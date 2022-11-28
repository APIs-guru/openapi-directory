from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OptionGroupOptionsMessage:
    r"""OptionGroupOptionsMessage
    <p/>
    """
    
    marker: Optional[str] = field(default=None)
    option_group_options: Optional[List[OptionGroupOption]] = field(default=None)
    
