from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails:
    r"""DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails
    Details about the activity.
    """
    
    director_activity_hash: Optional[int] = field(default=None)
    instance_id: Optional[int] = field(default=None)
    is_private: Optional[bool] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    mode: Optional[int] = field(default=None)
    modes: Optional[List[int]] = field(default=None)
    reference_id: Optional[int] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyPostGameCarnageReportData:
    activity_details: Optional[DestinyHistoricalStatsDestinyPostGameCarnageReportDataActivityDetails] = field(default=None)
    entries: Optional[List[DestinyHistoricalStatsDestinyPostGameCarnageReportEntry]] = field(default=None)
    period: Optional[datetime] = field(default=None)
    starting_phase_index: Optional[int] = field(default=None)
    teams: Optional[List[DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry]] = field(default=None)
    
