from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TransportsSupported:
    r"""TransportsSupported
    'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
    """
    
    serializers: Optional[List[str]] = field(default=None)
    transport: Optional[TransportDescriptor] = field(default=None)
    
