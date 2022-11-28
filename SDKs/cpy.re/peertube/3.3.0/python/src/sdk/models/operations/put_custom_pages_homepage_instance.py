from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PutCustomPagesHomepageInstanceRequestBody:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass
class PutCustomPagesHomepageInstanceSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutCustomPagesHomepageInstanceRequest:
    security: PutCustomPagesHomepageInstanceSecurity = field()
    request: Optional[PutCustomPagesHomepageInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCustomPagesHomepageInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    
