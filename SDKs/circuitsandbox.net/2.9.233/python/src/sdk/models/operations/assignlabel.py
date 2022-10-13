from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AssignLabelPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssignLabelRequestBody:
    label: str = field(default=None, metadata={'form': { 'field_name': 'label' }})
    

@dataclass
class AssignLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignLabelRequest:
    path_params: AssignLabelPathParams = field(default=None)
    request: AssignLabelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AssignLabelSecurity = field(default=None)
    

@dataclass
class AssignLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
