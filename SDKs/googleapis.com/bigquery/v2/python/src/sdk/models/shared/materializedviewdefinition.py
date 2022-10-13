from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MaterializedViewDefinition:
    enable_refresh: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableRefresh' }})
    last_refresh_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRefreshTime' }})
    max_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxStaleness' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    refresh_interval_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshIntervalMs' }})
    
