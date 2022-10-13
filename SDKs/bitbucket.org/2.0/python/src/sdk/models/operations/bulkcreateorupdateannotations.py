from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class BulkCreateOrUpdateAnnotationsPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateOrUpdateAnnotationsRequest:
    path_params: BulkCreateOrUpdateAnnotationsPathParams = field(default=None)
    request: List[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BulkCreateOrUpdateAnnotationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    report_annotations: Optional[List[dict[str, Any]]] = field(default=None)
    
