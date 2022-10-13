from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyAuthenticationProfileActionEnum(str, Enum):
    MODIFY_AUTHENTICATION_PROFILE = "ModifyAuthenticationProfile"

class GetModifyAuthenticationProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyAuthenticationProfileQueryParams:
    action: GetModifyAuthenticationProfileActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    authentication_profile_content: str = field(default=None, metadata={'query_param': { 'field_name': 'AuthenticationProfileContent', 'style': 'form', 'explode': True }})
    authentication_profile_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AuthenticationProfileName', 'style': 'form', 'explode': True }})
    version: GetModifyAuthenticationProfileVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyAuthenticationProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyAuthenticationProfileRequest:
    query_params: GetModifyAuthenticationProfileQueryParams = field(default=None)
    headers: GetModifyAuthenticationProfileHeaders = field(default=None)
    

@dataclass
class GetModifyAuthenticationProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
