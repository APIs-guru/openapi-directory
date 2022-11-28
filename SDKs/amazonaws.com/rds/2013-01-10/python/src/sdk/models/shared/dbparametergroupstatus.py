from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbParameterGroupStatus:
    db_parameter_group_name: Optional[str] = field(default=None)
    parameter_apply_status: Optional[str] = field(default=None)
    
