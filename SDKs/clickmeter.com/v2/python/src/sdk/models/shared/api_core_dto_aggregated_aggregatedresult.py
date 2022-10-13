from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_aggregated_aggregatedresult


@dataclass_json
@dataclass
class APICoreDtoAggregatedAggregatedResult:
    activity_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityDay' }})
    commissions_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commissionsCost' }})
    conversions_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionsCost' }})
    conversions_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionsValue' }})
    converted_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convertedClicks' }})
    entity_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityData' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    from_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDay' }})
    hourly_break_down: Optional[dict[str, api_core_dto_aggregated_aggregatedresult.APICoreDtoAggregatedAggregatedResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourlyBreakDown' }})
    last_hit_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastHitDate' }})
    spider_hits_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spiderHitsCount' }})
    to_day: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toDay' }})
    total_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalClicks' }})
    total_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalViews' }})
    unique_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueClicks' }})
    unique_conversions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueConversions' }})
    unique_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueViews' }})
    
