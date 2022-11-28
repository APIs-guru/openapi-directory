from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetV1VerificationResultFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1VerificationResultQueryParams:
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    otp: str = field(metadata={'query_param': { 'field_name': 'otp', 'style': 'form', 'explode': True }})
    tran_id: str = field(metadata={'query_param': { 'field_name': 'tran_id', 'style': 'form', 'explode': True }})
    format: Optional[GetV1VerificationResultFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1VerificationResultRequest:
    query_params: GetV1VerificationResultQueryParams = field()
    

@dataclass
class GetV1VerificationResultResponse:
    content_type: str = field()
    status_code: int = field()
    get_v1_verification_result_200_application_json_string: Optional[str] = field(default=None)
    
