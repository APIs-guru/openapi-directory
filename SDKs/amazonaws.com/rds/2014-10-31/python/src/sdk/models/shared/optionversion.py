from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OptionVersion:
    r"""OptionVersion
    The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
    """
    
    is_default: Optional[bool] = field(default=None)
    version: Optional[str] = field(default=None)
    
