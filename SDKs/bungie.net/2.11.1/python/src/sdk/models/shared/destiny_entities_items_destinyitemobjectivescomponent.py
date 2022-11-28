from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective:
    r"""DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
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
class DestinyEntitiesItemsDestinyItemObjectivesComponent:
    r"""DestinyEntitiesItemsDestinyItemObjectivesComponent
    Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
    """
    
    date_completed: Optional[datetime] = field(default=None)
    flavor_objective: Optional[DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective] = field(default=None)
    objectives: Optional[List[DestinyQuestsDestinyObjectiveProgress]] = field(default=None)
    
