from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsAPIGatewayMethodSettings:
    cache_data_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheDataEncrypted' }})
    cache_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheTtlInSeconds' }})
    caching_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CachingEnabled' }})
    data_trace_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataTraceEnabled' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpMethod' }})
    logging_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingLevel' }})
    metrics_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricsEnabled' }})
    require_authorization_for_cache_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequireAuthorizationForCacheControl' }})
    resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePath' }})
    throttling_burst_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingBurstLimit' }})
    throttling_rate_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThrottlingRateLimit' }})
    unauthorized_cache_control_header_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnauthorizedCacheControlHeaderStrategy' }})
    
