from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequestBody:
    image_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentRequest:
    request: Optional[EnterpriseAdminCreatePreReceiveEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreatePreReceiveEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_environment: Optional[shared.PreReceiveEnvironment] = field(default=None)
    
