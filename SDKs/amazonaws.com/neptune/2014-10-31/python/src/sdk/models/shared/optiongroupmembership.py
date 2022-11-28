from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionGroupMembership:
    r"""OptionGroupMembership
    Not supported by Neptune.
    """
    
    option_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
