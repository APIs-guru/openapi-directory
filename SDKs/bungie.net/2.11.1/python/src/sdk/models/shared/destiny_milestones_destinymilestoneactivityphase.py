from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyMilestonesDestinyMilestoneActivityPhase:
    r"""DestinyMilestonesDestinyMilestoneActivityPhase
    Represents whatever information we can return about an explicit phase in an activity. In the future, I hope we'll have more than just \"guh, you done gone and did something,\" but for the forseeable future that's all we've got. I'm making it more than just a list of booleans out of that overly-optimistic hope.
    """
    
    complete: Optional[bool] = field(default=None)
    phase_hash: Optional[int] = field(default=None)
    
