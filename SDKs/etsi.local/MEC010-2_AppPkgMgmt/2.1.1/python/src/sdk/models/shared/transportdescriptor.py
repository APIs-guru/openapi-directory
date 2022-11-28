from dataclasses import dataclass, field
from typing import Any


@dataclass
class TransportDescriptor:
    protocol: str = field()
    security: Any = field()
    type: str = field()
    version: str = field()
    
