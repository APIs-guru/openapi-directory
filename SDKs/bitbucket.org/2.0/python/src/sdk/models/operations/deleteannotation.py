from dataclasses import dataclass, field



@dataclass
class DeleteAnnotationPathParams:
    annotation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'annotationId', 'style': 'simple', 'explode': False }})
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAnnotationRequest:
    path_params: DeleteAnnotationPathParams = field(default=None)
    

@dataclass
class DeleteAnnotationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
