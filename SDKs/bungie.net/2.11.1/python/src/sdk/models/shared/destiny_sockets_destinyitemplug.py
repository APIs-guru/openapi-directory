from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinySocketsDestinyItemPlug:
    can_insert: Optional[bool] = field(default=None)
    enable_fail_indexes: Optional[List[int]] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    insert_fail_indexes: Optional[List[int]] = field(default=None)
    plug_item_hash: Optional[int] = field(default=None)
    plug_objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    
