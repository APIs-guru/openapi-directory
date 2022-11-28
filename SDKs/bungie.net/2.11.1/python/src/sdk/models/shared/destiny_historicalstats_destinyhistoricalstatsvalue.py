from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsValueBasic:
    r"""DestinyHistoricalStatsDestinyHistoricalStatsValueBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsValuePga:
    r"""DestinyHistoricalStatsDestinyHistoricalStatsValuePga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted:
    r"""DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsValue:
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyHistoricalStatsValueBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyHistoricalStatsValuePga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted] = field(default=None)
    
