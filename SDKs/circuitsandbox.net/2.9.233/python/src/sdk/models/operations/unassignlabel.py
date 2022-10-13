from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnassignLabelPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    label_id: str = field(default=None, metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnassignLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnassignLabelRequest:
    path_params: UnassignLabelPathParams = field(default=None)
    security: UnassignLabelSecurity = field(default=None)
    

@dataclass
class UnassignLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
