from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams = field()
    

@dataclass
class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_environment_download_status: Optional[shared.PreReceiveEnvironmentDownloadStatus] = field(default=None)
    
