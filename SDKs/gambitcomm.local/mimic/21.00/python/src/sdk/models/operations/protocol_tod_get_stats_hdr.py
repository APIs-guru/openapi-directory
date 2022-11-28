from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTodGetStatsHdrResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_tod_get_stats_hdr_200_application_json_strings: Optional[List[str]] = field(default=None)
    
