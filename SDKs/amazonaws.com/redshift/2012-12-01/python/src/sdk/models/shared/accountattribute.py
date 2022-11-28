from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AccountAttribute:
    r"""AccountAttribute
    A name value pair that describes an aspect of an account. 
    """
    
    attribute_name: Optional[str] = field(default=None)
    attribute_values: Optional[List[AttributeValueTarget]] = field(default=None)
    
