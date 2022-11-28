from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IPRange:
    r"""IPRange
     This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. 
    """
    
    cidrip: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
