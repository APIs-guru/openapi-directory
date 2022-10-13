from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LogsFilter:
    connector_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'connector_id' }})
    exclude_unified_apis: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_unified_apis' }})
    status_code: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'status_code' }})
    
