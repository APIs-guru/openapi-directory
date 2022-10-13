from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams:
    pre_receive_environment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest:
    path_params: EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON:
    errors: Optional[List[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_start_pre_receive_environment_download_422_application_json_object: Optional[EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON] = field(default=None)
    pre_receive_environment_download_status: Optional[shared.PreReceiveEnvironmentDownloadStatus] = field(default=None)
    
