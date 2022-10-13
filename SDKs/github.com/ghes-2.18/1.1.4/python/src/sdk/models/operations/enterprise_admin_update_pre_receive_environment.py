from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON:
    errors: Optional[List[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_update_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON] = field(default=None)
    pre_receive_environment: Optional[shared.PreReceiveEnvironment] = field(default=None)
    
