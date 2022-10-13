from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UnassignLabelsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnassignLabelsRequestBody:
    label_ids: List[str] = field(default=None, metadata={'form': { 'field_name': 'labelIds' }})
    

@dataclass
class UnassignLabelsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnassignLabelsRequest:
    path_params: UnassignLabelsPathParams = field(default=None)
    request: UnassignLabelsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UnassignLabelsSecurity = field(default=None)
    

@dataclass
class UnassignLabelsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label_ids: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
