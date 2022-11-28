from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyComponentsKiosksDestinyKioskItemFlavorObjective:
    r"""DestinyComponentsKiosksDestinyKioskItemFlavorObjective
    I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for \"flavor\" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
    """
    
    activity_hash: Optional[int] = field(default=None)
    complete: Optional[bool] = field(default=None)
    completion_value: Optional[int] = field(default=None)
    destination_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    progress: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    

@dataclass
class DestinyComponentsKiosksDestinyKioskItem:
    can_acquire: Optional[bool] = field(default=None)
    failure_indexes: Optional[List[int]] = field(default=None)
    flavor_objective: Optional[DestinyComponentsKiosksDestinyKioskItemFlavorObjective] = field(default=None)
    index: Optional[int] = field(default=None)
    
