from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class AssignLabelsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssignLabelsRequestBody:
    labels: List[str] = field(metadata={'form': { 'field_name': 'labels' }})
    

@dataclass
class AssignLabelsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignLabelsRequest:
    path_params: AssignLabelsPathParams = field()
    request: AssignLabelsRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AssignLabelsSecurity = field()
    

@dataclass
class AssignLabelsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label_ids: Optional[List[Any]] = field(default=None)
    
