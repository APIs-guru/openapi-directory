from dataclasses import dataclass, field
from typing import List


@dataclass
class ActionsDownloadWorkflowRunLogsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDownloadWorkflowRunLogsRequest:
    path_params: ActionsDownloadWorkflowRunLogsPathParams = field(default=None)
    

@dataclass
class ActionsDownloadWorkflowRunLogsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
