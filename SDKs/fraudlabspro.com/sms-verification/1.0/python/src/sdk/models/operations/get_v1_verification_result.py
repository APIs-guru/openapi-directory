from dataclasses import dataclass, field
from typing import Enum,Optional

class GetV1VerificationResultFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1VerificationResultQueryParams:
    format: Optional[GetV1VerificationResultFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    otp: str = field(default=None, metadata={'query_param': { 'field_name': 'otp', 'style': 'form', 'explode': True }})
    tran_id: str = field(default=None, metadata={'query_param': { 'field_name': 'tran_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1VerificationResultRequest:
    query_params: GetV1VerificationResultQueryParams = field(default=None)
    

@dataclass
class GetV1VerificationResultResponse:
    content_type: str = field(default=None)
    get_v1_verification_result_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
