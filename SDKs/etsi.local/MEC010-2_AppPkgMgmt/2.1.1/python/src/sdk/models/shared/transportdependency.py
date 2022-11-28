from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class TransportDependency:
    labels: List[str] = field()
    serializers: List[str] = field()
    transport: TransportDescriptor = field()
    
