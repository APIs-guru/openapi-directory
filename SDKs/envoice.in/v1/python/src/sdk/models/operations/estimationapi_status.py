from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class EstimationAPIStatusQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class EstimationAPIStatusHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class EstimationAPIStatusRequest:
    query_params: EstimationAPIStatusQueryParams = field(default=None)
    headers: EstimationAPIStatusHeaders = field(default=None)
    
class EstimationAPIStatus200ApplicationJSONEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"

class EstimationAPIStatus200TextJSONEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass
class EstimationAPIStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    estimation_api_status_200_application_json_string_enum: Optional[EstimationAPIStatus200ApplicationJSONEnum] = field(default=None)
    estimation_api_status_200_text_json_string_enum: Optional[EstimationAPIStatus200TextJSONEnum] = field(default=None)
    status_code: int = field(default=None)
    
