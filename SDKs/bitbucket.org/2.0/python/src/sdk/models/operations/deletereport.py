from dataclasses import dataclass, field



@dataclass
class DeleteReportPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportRequest:
    path_params: DeleteReportPathParams = field(default=None)
    

@dataclass
class DeleteReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
