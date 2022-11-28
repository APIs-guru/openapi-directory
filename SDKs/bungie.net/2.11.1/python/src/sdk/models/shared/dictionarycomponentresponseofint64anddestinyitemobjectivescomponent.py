from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent:
    data: Optional[dict[str, DestinyEntitiesItemsDestinyItemObjectivesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    
