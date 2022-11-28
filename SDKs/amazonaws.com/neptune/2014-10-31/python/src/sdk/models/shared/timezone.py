from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Timezone:
    r"""Timezone
    A time zone associated with a <a>DBInstance</a>.
    """
    
    timezone_name: Optional[str] = field(default=None)
    
