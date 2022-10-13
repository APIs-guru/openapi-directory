from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoTopsTopItem:
    entity_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityData' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_hit_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastHitDate' }})
    spider_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spiderClicks' }})
    spider_hits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spiderHits' }})
    spider_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spiderViews' }})
    total_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalClicks' }})
    total_commissions_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCommissionsCost' }})
    total_conversions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalConversions' }})
    total_conversions_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalConversionsCost' }})
    total_conversions_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalConversionsValue' }})
    total_hits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalHits' }})
    total_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalViews' }})
    unique_clicks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueClicks' }})
    unique_hits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueHits' }})
    unique_views: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueViews' }})
    
