from dataclasses import dataclass, field
from typing import Any,Optional
from . import *


@dataclass
class ServiceDescriptor:
    r"""ServiceDescriptor
    'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
    """
    
    ser_name: str = field()
    version: str = field()
    ser_category: Optional[Any] = field(default=None)
    transports_supported: Optional[TransportsSupported] = field(default=None)
    
