from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestSystemRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestSystemRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemRescueKeyPairRequest:
    headers: RequestSystemRescueKeyPairHeaders = field()
    query_params: RequestSystemRescueKeyPairQueryParams = field()
    

@dataclass
class RequestSystemRescueKeyPairResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_key_pair_container: Optional[shared.UserKeyPairContainerOutput] = field(default=None)
    
