from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGetAccessKeyInfoActionEnum(str, Enum):
    GET_ACCESS_KEY_INFO = "GetAccessKeyInfo"

class GetGetAccessKeyInfoVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_06_15 = "2011-06-15"


@dataclass
class GetGetAccessKeyInfoQueryParams:
    access_key_id: str = field(metadata={'query_param': { 'field_name': 'AccessKeyId', 'style': 'form', 'explode': True }})
    action: GetGetAccessKeyInfoActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetGetAccessKeyInfoVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetAccessKeyInfoHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetAccessKeyInfoRequest:
    headers: GetGetAccessKeyInfoHeaders = field()
    query_params: GetGetAccessKeyInfoQueryParams = field()
    

@dataclass
class GetGetAccessKeyInfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
