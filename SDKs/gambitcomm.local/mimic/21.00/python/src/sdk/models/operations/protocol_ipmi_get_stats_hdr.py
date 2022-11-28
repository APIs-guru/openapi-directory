from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolIpmiGetStatsHdrResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_ipmi_get_stats_hdr_200_application_json_strings: Optional[List[str]] = field(default=None)
    
