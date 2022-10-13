from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AssignLabelsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssignLabelsRequestBody:
    labels: List[str] = field(default=None, metadata={'form': { 'field_name': 'labels' }})
    

@dataclass
class AssignLabelsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignLabelsRequest:
    path_params: AssignLabelsPathParams = field(default=None)
    request: AssignLabelsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AssignLabelsSecurity = field(default=None)
    

@dataclass
class AssignLabelsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label_ids: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
