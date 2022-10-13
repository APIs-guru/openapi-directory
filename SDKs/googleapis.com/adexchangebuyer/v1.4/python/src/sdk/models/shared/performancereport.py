from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PerformanceReport:
    bid_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidRate' }})
    bid_request_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidRequestRate' }})
    callout_status_rate: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calloutStatusRate' }})
    cookie_matcher_status_rate: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookieMatcherStatusRate' }})
    creative_status_rate: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeStatusRate' }})
    filtered_bid_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredBidRate' }})
    hosted_match_status_rate: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostedMatchStatusRate' }})
    inventory_match_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryMatchRate' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    latency50th_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency50thPercentile' }})
    latency85th_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency85thPercentile' }})
    latency95th_percentile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency95thPercentile' }})
    no_quota_in_region: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noQuotaInRegion' }})
    out_of_quota: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outOfQuota' }})
    pixel_match_requests: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelMatchRequests' }})
    pixel_match_responses: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelMatchResponses' }})
    quota_configured_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaConfiguredLimit' }})
    quota_throttled_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaThrottledLimit' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    successful_request_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successfulRequestRate' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    unsuccessful_request_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsuccessfulRequestRate' }})
    
