from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionGroupMembership:
    option_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
