from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact:
    r"""DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact
    Data related to your progress on the current season's artifact that can vary per character.
    """
    
    artifact_hash: Optional[int] = field(default=None)
    points_used: Optional[int] = field(default=None)
    reset_count: Optional[int] = field(default=None)
    tiers: Optional[List[DestinyArtifactsDestinyArtifactTier]] = field(default=None)
    

@dataclass
class DestinyEntitiesCharactersDestinyCharacterProgressionComponent:
    r"""DestinyEntitiesCharactersDestinyCharacterProgressionComponent
    This component returns anything that could be considered \"Progression\" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
    """
    
    checklists: Optional[dict[str, dict[str, bool]]] = field(default=None)
    factions: Optional[dict[str, DestinyProgressionDestinyFactionProgression]] = field(default=None)
    milestones: Optional[dict[str, DestinyMilestonesDestinyMilestone]] = field(default=None)
    progressions: Optional[dict[str, DestinyDestinyProgression]] = field(default=None)
    quests: Optional[List[DestinyQuestsDestinyQuestStatus]] = field(default=None)
    seasonal_artifact: Optional[DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact] = field(default=None)
    uninstanced_item_objectives: Optional[dict[str, List[DestinyQuestsDestinyObjectiveProgress]]] = field(default=None)
    
