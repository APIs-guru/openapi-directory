from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsageSnapshotsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsageSnapshotsRequest:
    query_params: GetUsageSnapshotsQueryParams = field()
    

@dataclass
class GetUsageSnapshotsResponse:
    content_type: str = field()
    status_code: int = field()
    usage_snapshot_entities: Optional[List[shared.UsageSnapshotEntity]] = field(default=None)
    
