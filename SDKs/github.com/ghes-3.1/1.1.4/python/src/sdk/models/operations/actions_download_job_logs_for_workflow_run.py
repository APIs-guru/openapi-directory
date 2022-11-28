from dataclasses import dataclass, field
from typing import List


@dataclass
class ActionsDownloadJobLogsForWorkflowRunPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'job_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDownloadJobLogsForWorkflowRunRequest:
    path_params: ActionsDownloadJobLogsForWorkflowRunPathParams = field()
    

@dataclass
class ActionsDownloadJobLogsForWorkflowRunResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
