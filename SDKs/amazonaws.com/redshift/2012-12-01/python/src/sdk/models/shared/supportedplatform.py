from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SupportedPlatform:
    r"""SupportedPlatform
    A list of supported platforms for orderable clusters.
    """
    
    name: Optional[str] = field(default=None)
    
