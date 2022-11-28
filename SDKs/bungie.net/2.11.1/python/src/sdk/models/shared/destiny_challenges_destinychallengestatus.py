from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyChallengesDestinyChallengeStatusObjective:
    r"""DestinyChallengesDestinyChallengeStatusObjective
    The progress - including completion status - of the active challenge.
    """
    
    activity_hash: Optional[int] = field(default=None)
    complete: Optional[bool] = field(default=None)
    completion_value: Optional[int] = field(default=None)
    destination_hash: Optional[int] = field(default=None)
    objective_hash: Optional[int] = field(default=None)
    progress: Optional[int] = field(default=None)
    visible: Optional[bool] = field(default=None)
    

@dataclass
class DestinyChallengesDestinyChallengeStatus:
    r"""DestinyChallengesDestinyChallengeStatus
    Represents the status and other related information for a challenge that is - or was - available to a player. 
    A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
    """
    
    objective: Optional[DestinyChallengesDestinyChallengeStatusObjective] = field(default=None)
    
