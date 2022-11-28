from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionGroupMembership:
    r"""OptionGroupMembership
    Provides information on the option groups the DB instance is a member of.
    """
    
    option_group_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
