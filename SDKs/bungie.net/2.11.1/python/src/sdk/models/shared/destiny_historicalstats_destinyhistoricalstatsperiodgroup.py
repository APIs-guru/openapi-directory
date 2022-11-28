from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails:
    r"""DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails
    If the period group is for a specific activity, this property will be set.
    """
    
    director_activity_hash: Optional[int] = field(default=None)
    instance_id: Optional[int] = field(default=None)
    is_private: Optional[bool] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    mode: Optional[int] = field(default=None)
    modes: Optional[List[int]] = field(default=None)
    reference_id: Optional[int] = field(default=None)
    

@dataclass
class DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup:
    activity_details: Optional[DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroupActivityDetails] = field(default=None)
    period: Optional[datetime] = field(default=None)
    values: Optional[dict[str, DestinyHistoricalStatsDestinyHistoricalStatsValue]] = field(default=None)
    
