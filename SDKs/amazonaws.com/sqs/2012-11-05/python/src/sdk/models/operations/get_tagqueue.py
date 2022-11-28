from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclass
class GetTagQueuePathParams:
    account_number: int = field(metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetTagQueueActionEnum(str, Enum):
    TAG_QUEUE = "TagQueue"

class GetTagQueueVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetTagQueueQueryParams:
    action: GetTagQueueActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    tags: dict[str, str] = field(metadata={'query_param': { 'field_name': 'Tags', 'style': 'form', 'explode': True }})
    version: GetTagQueueVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagQueueHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagQueueRequest:
    headers: GetTagQueueHeaders = field()
    path_params: GetTagQueuePathParams = field()
    query_params: GetTagQueueQueryParams = field()
    

@dataclass
class GetTagQueueResponse:
    content_type: str = field()
    status_code: int = field()
    
