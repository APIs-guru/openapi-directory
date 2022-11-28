from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Endpoint:
    r"""Endpoint
    Describes a connection endpoint.
    """
    
    address: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    vpc_endpoints: Optional[List[VpcEndpoint]] = field(default=None)
    
