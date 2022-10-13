from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestUserKeyPairsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestUserKeyPairsRequest:
    headers: RequestUserKeyPairsHeaders = field(default=None)
    

@dataclass
class RequestUserKeyPairsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_key_pair_containers: Optional[List[shared.UserKeyPairContainer]] = field(default=None)
    
