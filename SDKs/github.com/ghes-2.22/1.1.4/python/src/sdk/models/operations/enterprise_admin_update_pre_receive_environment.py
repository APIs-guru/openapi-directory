from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody:
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON:
    errors: Optional[List[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminUpdatePreReceiveEnvironmentPathParams = field()
    request: Optional[EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_update_pre_receive_environment_422_application_json_object: Optional[EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON] = field(default=None)
    pre_receive_environment: Optional[shared.PreReceiveEnvironment] = field(default=None)
    
