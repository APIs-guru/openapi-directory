from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyQuestsDestinyObjectiveProgress:
    r"""DestinyQuestsDestinyObjectiveProgress
    Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
    """
    
    activity_hash: Optional[int] = field(default=None)
    complete: Optional[bool] = field(default=None)
    completion_value: Optional[int] = field(default=None)
    destination_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    progress: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    
