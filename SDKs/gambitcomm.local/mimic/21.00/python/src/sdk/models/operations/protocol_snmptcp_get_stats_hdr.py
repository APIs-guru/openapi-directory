from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmptcpGetStatsHdrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmptcp_get_stats_hdr_200_application_json_strings: Optional[List[str]] = field(default=None)
    
