from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class VpcEndpoint:
    r"""VpcEndpoint
    The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
    """
    
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None)
    vpc_endpoint_id: Optional[str] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
