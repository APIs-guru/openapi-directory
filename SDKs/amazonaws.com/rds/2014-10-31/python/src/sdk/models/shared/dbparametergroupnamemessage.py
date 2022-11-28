from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbParameterGroupNameMessage:
    r"""DbParameterGroupNameMessage
     Contains the result of a successful invocation of the <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action. 
    """
    
    db_parameter_group_name: Optional[str] = field(default=None)
    
