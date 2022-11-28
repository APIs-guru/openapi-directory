from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore
    Score earned by the team
    """
    
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic
    Basic stat value.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga
    Per game average for the statistic, if applicable
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted
    Weighted value of the stat if a weight greater than 1 has been assigned.
    """
    
    display_value: Optional[str] = field(default=None)
    value: Optional[float] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding
    Team's standing relative to other teams.
    """
    
    activity_id: Optional[int] = field(default=None)
    basic: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic] = field(default=None)
    pga: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga] = field(default=None)
    stat_id: Optional[str] = field(default=None)
    weighted: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry:
    score: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore] = field(default=None)
    standing: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding] = field(default=None)
    team_id: Optional[int] = field(default=None)
    team_name: Optional[str] = field(default=None)
    
