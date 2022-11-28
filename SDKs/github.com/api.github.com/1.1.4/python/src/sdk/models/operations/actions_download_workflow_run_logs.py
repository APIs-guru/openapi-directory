from dataclasses import dataclass, field
from typing import List


@dataclass
class ActionsDownloadWorkflowRunLogsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDownloadWorkflowRunLogsRequest:
    path_params: ActionsDownloadWorkflowRunLogsPathParams = field()
    

@dataclass
class ActionsDownloadWorkflowRunLogsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
