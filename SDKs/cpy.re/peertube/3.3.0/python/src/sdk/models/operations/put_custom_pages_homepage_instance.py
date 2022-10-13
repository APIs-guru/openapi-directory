from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutCustomPagesHomepageInstanceRequestBody:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    

@dataclass
class PutCustomPagesHomepageInstanceSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutCustomPagesHomepageInstanceRequest:
    request: Optional[PutCustomPagesHomepageInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutCustomPagesHomepageInstanceSecurity = field(default=None)
    

@dataclass
class PutCustomPagesHomepageInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
