from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDecodeAuthorizationMessageActionEnum(str, Enum):
    DECODE_AUTHORIZATION_MESSAGE = "DecodeAuthorizationMessage"

class GetDecodeAuthorizationMessageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_06_15 = "2011-06-15"


@dataclass
class GetDecodeAuthorizationMessageQueryParams:
    action: GetDecodeAuthorizationMessageActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    encoded_message: str = field(metadata={'query_param': { 'field_name': 'EncodedMessage', 'style': 'form', 'explode': True }})
    version: GetDecodeAuthorizationMessageVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDecodeAuthorizationMessageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDecodeAuthorizationMessageRequest:
    headers: GetDecodeAuthorizationMessageHeaders = field()
    query_params: GetDecodeAuthorizationMessageQueryParams = field()
    

@dataclass
class GetDecodeAuthorizationMessageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
