from dataclasses import dataclass, field
from typing import Any,List,Optional
from . import *


@dataclass
class DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression:
    r"""DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression
    If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
    """
    
    current_progress: Optional[int] = field(default=None)
    current_reset_count: Optional[int] = field(default=None)
    daily_limit: Optional[int] = field(default=None)
    daily_progress: Optional[int] = field(default=None)
    level: Optional[int] = field(default=None)
    level_cap: Optional[int] = field(default=None)
    next_level_at: Optional[int] = field(default=None)
    progress_to_next_level: Optional[int] = field(default=None)
    progression_hash: Optional[int] = field(default=None)
    reward_item_states: Optional[List[int]] = field(default=None)
    season_resets: Optional[List[DestinyDestinyProgressionResetEntry]] = field(default=None)
    step_index: Optional[int] = field(default=None)
    weekly_limit: Optional[int] = field(default=None)
    weekly_progress: Optional[int] = field(default=None)
    

@dataclass
class DestinyEntitiesItemsDestinyItemTalentGridComponent:
    r"""DestinyEntitiesItemsDestinyItemTalentGridComponent
    Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
    The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
    An important note is that talent grids are defined as such:
    A Grid has 1:M Nodes, which has 1:M Steps.
    Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a \"Super Cool Bonus\" node, the actual icon and text for the node is coming from the current Step of that node).
    Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
    See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
    """
    
    grid_progression: Optional[DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression] = field(default=None)
    is_grid_complete: Optional[bool] = field(default=None)
    nodes: Optional[List[DestinyDestinyTalentNode]] = field(default=None)
    talent_grid_hash: Optional[int] = field(default=None)
    
