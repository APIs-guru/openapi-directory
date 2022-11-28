from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UnassignLabelsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnassignLabelsRequestBody:
    label_ids: List[str] = field(metadata={'form': { 'field_name': 'labelIds' }})
    

@dataclass
class UnassignLabelsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnassignLabelsRequest:
    path_params: UnassignLabelsPathParams = field()
    request: UnassignLabelsRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UnassignLabelsSecurity = field()
    

@dataclass
class UnassignLabelsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label_ids: Optional[List[Any]] = field(default=None)
    
