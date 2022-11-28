from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EndpointAccessList:
    endpoint_access_list: Optional[List[EndpointAccess]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
