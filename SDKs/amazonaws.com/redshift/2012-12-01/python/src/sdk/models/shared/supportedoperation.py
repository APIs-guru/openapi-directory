from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SupportedOperation:
    r"""SupportedOperation
    Describes the operations that are allowed on a maintenance track.
    """
    
    operation_name: Optional[str] = field(default=None)
    
