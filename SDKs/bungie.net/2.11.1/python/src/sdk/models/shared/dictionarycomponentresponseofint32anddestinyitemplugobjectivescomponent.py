from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent:
    data: Optional[dict[str, DestinyComponentsItemsDestinyItemPlugObjectivesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    
