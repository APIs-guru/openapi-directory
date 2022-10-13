from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ChecksListAnnotationsPathParams:
    check_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'check_run_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChecksListAnnotationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ChecksListAnnotationsRequest:
    path_params: ChecksListAnnotationsPathParams = field(default=None)
    query_params: ChecksListAnnotationsQueryParams = field(default=None)
    

@dataclass
class ChecksListAnnotationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    check_annotations: Optional[List[shared.CheckAnnotation]] = field(default=None)
    
