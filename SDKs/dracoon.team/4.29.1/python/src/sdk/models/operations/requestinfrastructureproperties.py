from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestInfrastructurePropertiesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestInfrastructurePropertiesRequest:
    headers: RequestInfrastructurePropertiesHeaders = field()
    

@dataclass
class RequestInfrastructurePropertiesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    infrastructure_properties: Optional[shared.InfrastructureProperties] = field(default=None)
    
