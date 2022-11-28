from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DictionaryComponentResponseOfint32AndDestinyItemRenderComponent:
    data: Optional[dict[str, DestinyEntitiesItemsDestinyItemRenderComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    
