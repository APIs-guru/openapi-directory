from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errorstatistics
from . import faultstatistics


@dataclass_json
@dataclass
class EdgeStatistics:
    error_statistics: Optional[errorstatistics.ErrorStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorStatistics' }})
    fault_statistics: Optional[faultstatistics.FaultStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaultStatistics' }})
    ok_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OkCount' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    total_response_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalResponseTime' }})
    
