from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RemoveLabelPathParams:
    label_id: str = field(default=None, metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveLabelRequest:
    path_params: RemoveLabelPathParams = field(default=None)
    security: RemoveLabelSecurity = field(default=None)
    

@dataclass
class RemoveLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
