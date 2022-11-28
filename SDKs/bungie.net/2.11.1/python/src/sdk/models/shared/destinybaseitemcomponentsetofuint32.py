from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyBaseItemComponentSetOfuint32:
    objectives: Optional[DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent] = field(default=None)
    
