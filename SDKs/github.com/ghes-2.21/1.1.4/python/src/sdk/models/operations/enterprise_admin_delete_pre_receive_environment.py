from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON:
    errors: Optional[List[EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminDeletePreReceiveEnvironmentPathParams = field()
    

@dataclass
class EnterpriseAdminDeletePreReceiveEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_delete_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON] = field(default=None)
    
