from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody:
    image_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_environment: Optional[shared.PreReceiveEnvironment] = field(default=None)
    
