from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetActionNotificationExportResultsQueryParams:
    action_notification_export_id: int = field(default=None, metadata={'query_param': { 'field_name': 'action_notification_export_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionNotificationExportResultsRequest:
    query_params: GetActionNotificationExportResultsQueryParams = field(default=None)
    

@dataclass
class GetActionNotificationExportResultsResponse:
    action_notification_export_result_entities: Optional[List[shared.ActionNotificationExportResultEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
