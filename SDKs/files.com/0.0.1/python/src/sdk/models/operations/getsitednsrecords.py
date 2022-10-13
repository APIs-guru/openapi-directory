from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSiteDNSRecordsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSiteDNSRecordsRequest:
    query_params: GetSiteDNSRecordsQueryParams = field(default=None)
    

@dataclass
class GetSiteDNSRecordsResponse:
    content_type: str = field(default=None)
    dns_record_entities: Optional[List[shared.DNSRecordEntity]] = field(default=None)
    status_code: int = field(default=None)
    
