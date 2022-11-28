from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact:
    r"""DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
    Data related to your progress on the current season's artifact that is the same across characters.
    """
    
    artifact_hash: Optional[int] = field(default=None)
    point_progression: Optional[DestinyDestinyProgression] = field(default=None)
    points_acquired: Optional[int] = field(default=None)
    power_bonus: Optional[int] = field(default=None)
    power_bonus_progression: Optional[DestinyDestinyProgression] = field(default=None)
    

@dataclass
class DestinyComponentsProfilesDestinyProfileProgressionComponent:
    r"""DestinyComponentsProfilesDestinyProfileProgressionComponent
    The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
    This will include information such as Checklist info.
    """
    
    checklists: Optional[dict[str, dict[str, bool]]] = field(default=None)
    seasonal_artifact: Optional[DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact] = field(default=None)
    
