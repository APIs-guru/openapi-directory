from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyPerksDestinyPerkReference:
    r"""DestinyPerksDestinyPerkReference
    The list of perks to display in an item tooltip - and whether or not they have been activated.
    Perks apply a variety of effects to a character, and are generally either intrinsic to the item or provided in activated talent nodes or sockets.
    """
    
    icon_path: Optional[str] = field(default=None)
    is_active: Optional[bool] = field(default=None)
    perk_hash: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    
