from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAlgorithmsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAlgorithmsRequest:
    headers: RequestAlgorithmsHeaders = field()
    

@dataclass
class RequestAlgorithmsResponse:
    content_type: str = field()
    status_code: int = field()
    algorithm_version_info_list: Optional[shared.AlgorithmVersionInfoList] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
