from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AddLabelRequestBody:
    label: str = field(default=None, metadata={'form': { 'field_name': 'label' }})
    

@dataclass
class AddLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddLabelRequest:
    request: AddLabelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddLabelSecurity = field(default=None)
    

@dataclass
class AddLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    label: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
