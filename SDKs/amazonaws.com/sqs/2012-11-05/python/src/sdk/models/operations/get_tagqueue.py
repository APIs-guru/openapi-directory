from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetTagQueuePathParams:
    account_number: int = field(default=None, metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetTagQueueActionEnum(str, Enum):
    TAG_QUEUE = "TagQueue"

class GetTagQueueVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetTagQueueQueryParams:
    action: GetTagQueueActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    tags: dict[str, str] = field(default=None, metadata={'query_param': { 'field_name': 'Tags', 'style': 'form', 'explode': True }})
    version: GetTagQueueVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagQueueHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetTagQueueRequest:
    path_params: GetTagQueuePathParams = field(default=None)
    query_params: GetTagQueueQueryParams = field(default=None)
    headers: GetTagQueueHeaders = field(default=None)
    

@dataclass
class GetTagQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
