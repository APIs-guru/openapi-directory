from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeleteDbProxyEndpointResponse:
    db_proxy_endpoint: Optional[DbProxyEndpoint] = field(default=None)
    
