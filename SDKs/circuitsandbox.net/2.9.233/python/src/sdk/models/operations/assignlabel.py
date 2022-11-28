from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssignLabelPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssignLabelRequestBody:
    label: str = field(metadata={'form': { 'field_name': 'label' }})
    

@dataclass
class AssignLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignLabelRequest:
    path_params: AssignLabelPathParams = field()
    request: AssignLabelRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AssignLabelSecurity = field()
    

@dataclass
class AssignLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label: Optional[Any] = field(default=None)
    
