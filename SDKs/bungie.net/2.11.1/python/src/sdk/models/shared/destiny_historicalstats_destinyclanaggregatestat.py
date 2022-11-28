from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyHistoricalStatsDestinyClanAggregateStatValueBasic:
    r"""DestinyHistoricalStatsDestinyClanAggregateStatValueBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyClanAggregateStatValuePga:
    r"""DestinyHistoricalStatsDestinyClanAggregateStatValuePga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted:
    r"""DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyClanAggregateStatValue:
    r"""DestinyHistoricalStatsDestinyClanAggregateStatValue
    Value of the stat for this player
    """
    
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyClanAggregateStatValueBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyClanAggregateStatValuePga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyClanAggregateStat:
    mode: Optional[int] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    value: Optional[DestinyHistoricalStatsDestinyClanAggregateStatValue] = field(default=None)
    
