from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EndpointAuthorizationList:
    endpoint_authorization_list: Optional[List[EndpointAuthorization]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
