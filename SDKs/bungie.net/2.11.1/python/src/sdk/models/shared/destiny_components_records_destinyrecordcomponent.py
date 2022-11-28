from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsRecordsDestinyRecordComponent:
    interval_objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    intervals_redeemed_count: Optional[int] = field(default=None)
    objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    reward_visibilty: Optional[List[bool]] = field(default=None)
    state: Optional[int] = field(default=None)
    
