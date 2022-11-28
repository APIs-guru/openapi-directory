from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsItemsDestinyItemPlugObjectivesComponent:
    objectives_per_plug: Optional[dict[str, List[DestinyQuestsDestinyObjectiveProgress]]] = field(default=None)
    
