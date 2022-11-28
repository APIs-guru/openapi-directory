from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDestinyUnlockStatus:
    r"""DestinyDestinyUnlockStatus
    Indicates the status of an \"Unlock Flag\" on a Character or Profile.
    These are individual bits of state that can be either set or not set, and sometimes provide interesting human-readable information in their related DestinyUnlockDefinition.
    """
    
    is_set: Optional[bool] = field(default=None)
    unlock_hash: Optional[int] = field(default=None)
    
