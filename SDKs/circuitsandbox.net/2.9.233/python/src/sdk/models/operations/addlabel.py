from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AddLabelRequestBody:
    label: str = field(metadata={'form': { 'field_name': 'label' }})
    

@dataclass
class AddLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddLabelRequest:
    request: AddLabelRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddLabelSecurity = field()
    

@dataclass
class AddLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    label: Optional[Any] = field(default=None)
    
