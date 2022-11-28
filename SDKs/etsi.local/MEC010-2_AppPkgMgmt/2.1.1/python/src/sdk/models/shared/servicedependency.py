from dataclasses import dataclass, field
from typing import Any,List,Optional
from . import *


@dataclass
class ServiceDependency:
    ser_name: str = field()
    version: str = field()
    requested_permissions: Optional[List[str]] = field(default=None)
    ser_category: Optional[Any] = field(default=None)
    ser_transport_dependencies: Optional[List[TransportDependency]] = field(default=None)
    
