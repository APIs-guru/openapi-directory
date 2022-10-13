from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSyncJobsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSyncJobsRequest:
    query_params: GetSyncJobsQueryParams = field(default=None)
    

@dataclass
class GetSyncJobsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sync_job_entities: Optional[List[shared.SyncJobEntity]] = field(default=None)
    
