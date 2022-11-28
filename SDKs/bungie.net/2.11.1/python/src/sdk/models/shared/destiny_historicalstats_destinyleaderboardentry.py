from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo
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
class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo
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
class DestinyHistoricalStatsDestinyLeaderboardEntryPlayer:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryPlayer
    Identity details of the player
    """
    
    bungie_net_user_info: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo] = field(default=None)
    character_class: Optional[str] = field(default=None)
    character_level: Optional[int] = field(default=None)
    clan_name: Optional[str] = field(default=None)
    clan_tag: Optional[str] = field(default=None)
    class_hash: Optional[int] = field(default=None)
    destiny_user_info: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo] = field(default=None)
    emblem_hash: Optional[int] = field(default=None)
    gender_hash: Optional[int] = field(default=None)
    light_level: Optional[int] = field(default=None)
    race_hash: Optional[int] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntryValuePga:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryValuePga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntryValue:
    r"""DestinyHistoricalStatsDestinyLeaderboardEntryValue
    Value of the stat for this player
    """
    
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryValuePga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyLeaderboardEntry:
    character_id: Optional[int] = field(default=None)
    player: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryPlayer] = field(default=None)
    rank: Optional[int] = field(default=None)
    value: Optional[DestinyHistoricalStatsDestinyLeaderboardEntryValue] = field(default=None)
    
