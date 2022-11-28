from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetSessionTokenActionEnum(str, Enum):
    GET_SESSION_TOKEN = "GetSessionToken"

class GetGetSessionTokenVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_06_15 = "2011-06-15"


@dataclass
class GetGetSessionTokenQueryParams:
    action: GetGetSessionTokenActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetGetSessionTokenVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    duration_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DurationSeconds', 'style': 'form', 'explode': True }})
    serial_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SerialNumber', 'style': 'form', 'explode': True }})
    token_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TokenCode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetSessionTokenHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetSessionTokenRequest:
    headers: GetGetSessionTokenHeaders = field()
    query_params: GetGetSessionTokenQueryParams = field()
    

@dataclass
class GetGetSessionTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
