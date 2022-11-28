from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyAuthenticationProfileActionEnum(str, Enum):
    MODIFY_AUTHENTICATION_PROFILE = "ModifyAuthenticationProfile"

class GetModifyAuthenticationProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = "2012-12-01"


@dataclass
class GetModifyAuthenticationProfileQueryParams:
    action: GetModifyAuthenticationProfileActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    authentication_profile_content: str = field(metadata={'query_param': { 'field_name': 'AuthenticationProfileContent', 'style': 'form', 'explode': True }})
    authentication_profile_name: str = field(metadata={'query_param': { 'field_name': 'AuthenticationProfileName', 'style': 'form', 'explode': True }})
    version: GetModifyAuthenticationProfileVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyAuthenticationProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyAuthenticationProfileRequest:
    headers: GetModifyAuthenticationProfileHeaders = field()
    query_params: GetModifyAuthenticationProfileQueryParams = field()
    

@dataclass
class GetModifyAuthenticationProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
