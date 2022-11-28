from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetHistoryExportResultsQueryParams:
    history_export_id: int = field(metadata={'query_param': { 'field_name': 'history_export_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHistoryExportResultsRequest:
    query_params: GetHistoryExportResultsQueryParams = field()
    

@dataclass
class GetHistoryExportResultsResponse:
    content_type: str = field()
    status_code: int = field()
    history_export_result_entities: Optional[List[shared.HistoryExportResultEntity]] = field(default=None)
    
