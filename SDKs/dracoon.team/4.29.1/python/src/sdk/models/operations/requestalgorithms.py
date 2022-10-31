from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestAlgorithmsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAlgorithmsRequest:
    headers: RequestAlgorithmsHeaders = field(default=None)
    

@dataclass
class RequestAlgorithmsResponse:
    algorithm_version_info_list: Optional[shared.AlgorithmVersionInfoList] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
