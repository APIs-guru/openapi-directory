from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAnnotationPathParams:
    annotation_id: str = field(metadata={'path_param': { 'field_name': 'annotationId', 'style': 'simple', 'explode': False }})
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationRequest:
    path_params: GetAnnotationPathParams = field()
    

@dataclass
class GetAnnotationResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    report_annotation: Optional[dict[str, Any]] = field(default=None)
    
