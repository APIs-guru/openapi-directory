from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbParameterGroupNameMessage:
    db_parameter_group_name: Optional[str] = field(default=None)
    
