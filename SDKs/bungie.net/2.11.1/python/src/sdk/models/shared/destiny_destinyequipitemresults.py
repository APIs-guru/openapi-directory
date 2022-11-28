from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyDestinyEquipItemResults:
    r"""DestinyDestinyEquipItemResults
    The results of a bulk Equipping operation performed through the Destiny API.
    """
    
    equip_results: Optional[List[DestinyDestinyEquipItemResult]] = field(default=None)
    
