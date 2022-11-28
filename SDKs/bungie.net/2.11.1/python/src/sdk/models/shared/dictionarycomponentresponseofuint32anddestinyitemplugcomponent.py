from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent:
    data: Optional[dict[str, DestinyComponentsItemsDestinyItemPlugComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    
