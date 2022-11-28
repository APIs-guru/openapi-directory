from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UnassignLabelPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    label_id: str = field(metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnassignLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnassignLabelRequest:
    path_params: UnassignLabelPathParams = field()
    security: UnassignLabelSecurity = field()
    

@dataclass
class UnassignLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label: Optional[Any] = field(default=None)
    
