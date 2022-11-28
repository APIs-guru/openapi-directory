from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbParameterGroup:
    db_parameter_group_family: Optional[str] = field(default=None)
    db_parameter_group_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    
