from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams:
    pre_receive_environment_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON:
    errors: Optional[List[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest:
    path_params: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams = field()
    

@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_start_pre_receive_environment_download_422_application_json_object: Optional[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON] = field(default=None)
    pre_receive_environment_download_status: Optional[shared.PreReceiveEnvironmentDownloadStatus] = field(default=None)
    
