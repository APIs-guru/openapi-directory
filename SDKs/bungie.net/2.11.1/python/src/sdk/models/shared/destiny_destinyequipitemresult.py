from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDestinyEquipItemResult:
    r"""DestinyDestinyEquipItemResult
    The results of an Equipping operation performed through the Destiny API.
    """
    
    equip_status: Optional[int] = field(default=None)
    item_instance_id: Optional[int] = field(default=None)
    
