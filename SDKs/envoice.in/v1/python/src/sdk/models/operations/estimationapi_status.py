from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class EstimationAPIStatusQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class EstimationAPIStatusHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    
class EstimationAPIStatus200ApplicationJSONEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"

class EstimationAPIStatus200TextJSONEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass
class EstimationAPIStatusRequest:
    headers: EstimationAPIStatusHeaders = field()
    query_params: EstimationAPIStatusQueryParams = field()
    

@dataclass
class EstimationAPIStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    estimation_api_status_200_application_json_string_enum: Optional[EstimationAPIStatus200ApplicationJSONEnum] = field(default=None)
    estimation_api_status_200_text_json_string_enum: Optional[EstimationAPIStatus200TextJSONEnum] = field(default=None)
    
