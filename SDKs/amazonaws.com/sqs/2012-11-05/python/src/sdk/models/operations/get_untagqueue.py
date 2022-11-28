from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum


@dataclass
class GetUntagQueuePathParams:
    account_number: int = field(metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetUntagQueueActionEnum(str, Enum):
    UNTAG_QUEUE = "UntagQueue"

class GetUntagQueueVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetUntagQueueQueryParams:
    action: GetUntagQueueActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    tag_keys: List[str] = field(metadata={'query_param': { 'field_name': 'TagKeys', 'style': 'form', 'explode': True }})
    version: GetUntagQueueVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUntagQueueHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUntagQueueRequest:
    headers: GetUntagQueueHeaders = field()
    path_params: GetUntagQueuePathParams = field()
    query_params: GetUntagQueueQueryParams = field()
    

@dataclass
class GetUntagQueueResponse:
    content_type: str = field()
    status_code: int = field()
    
