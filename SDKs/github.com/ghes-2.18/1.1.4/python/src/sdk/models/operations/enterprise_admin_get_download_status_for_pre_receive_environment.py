from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_environment_download_status: Optional[shared.PreReceiveEnvironmentDownloadStatus] = field(default=None)
    
