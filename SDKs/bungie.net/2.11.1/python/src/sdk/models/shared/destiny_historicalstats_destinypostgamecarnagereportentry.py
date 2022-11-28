from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended
    Extended data extracted from the activity blob.
    """
    
    values: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    weapons: Optional[List[DestinyHistoricalStatsDestinyHistoricalWeaponStats]] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo
    Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
    """
    
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo
    Details about the player as they are known in game (platform display name, Destiny emblem)
    """
    
    applicable_membership_types: Optional[List[int]] = field(default=None)
    cross_save_override: Optional[int] = field(default=None)
    display_name: Optional[str] = field(default=None)
    icon_path: Optional[str] = field(default=None)
    is_public: Optional[bool] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    supplemental_display_name: Optional[str] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer
    Identity details of the player
    """
    
    bungie_net_user_info: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo] = field(default=None)
    character_class: Optional[str] = field(default=None)
    character_level: Optional[int] = field(default=None)
    clan_name: Optional[str] = field(default=None)
    clan_tag: Optional[str] = field(default=None)
    class_hash: Optional[int] = field(default=None)
    destiny_user_info: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo] = field(default=None)
    emblem_hash: Optional[int] = field(default=None)
    gender_hash: Optional[int] = field(default=None)
    light_level: Optional[int] = field(default=None)
    race_hash: Optional[int] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore
    Score of the player if available
    """
    
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportEntry:
    character_id: Optional[int] = field(default=None)
    extended: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended] = field(default=None)
    player: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer] = field(default=None)
    score: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore] = field(default=None)
    standing: Optional[int] = field(default=None)
    values: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    
