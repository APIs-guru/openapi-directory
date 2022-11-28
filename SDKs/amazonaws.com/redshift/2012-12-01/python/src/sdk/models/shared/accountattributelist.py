from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AccountAttributeList:
    account_attributes: Optional[List[AccountAttribute]] = field(default=None)
    
