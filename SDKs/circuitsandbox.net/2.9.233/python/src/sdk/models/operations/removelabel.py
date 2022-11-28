from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RemoveLabelPathParams:
    label_id: str = field(metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveLabelRequest:
    path_params: RemoveLabelPathParams = field()
    security: RemoveLabelSecurity = field()
    

@dataclass
class RemoveLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label: Optional[Any] = field(default=None)
    
