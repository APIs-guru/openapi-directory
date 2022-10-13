from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestInfrastructurePropertiesInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestInfrastructurePropertiesInfoRequest:
    headers: RequestInfrastructurePropertiesInfoHeaders = field(default=None)
    

@dataclass
class RequestInfrastructurePropertiesInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    infrastructure_properties: Optional[shared.InfrastructureProperties] = field(default=None)
    status_code: int = field(default=None)
    
