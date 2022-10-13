from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetReceiveMessagePathParams:
    account_number: int = field(default=None, metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetReceiveMessageActionEnum(str, Enum):
    RECEIVE_MESSAGE = "ReceiveMessage"

class GetReceiveMessageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetReceiveMessageQueryParams:
    action: GetReceiveMessageActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute_names: Optional[List[shared.QueueAttributeNameEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AttributeNames', 'style': 'form', 'explode': True }})
    max_number_of_messages: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxNumberOfMessages', 'style': 'form', 'explode': True }})
    message_attribute_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'MessageAttributeNames', 'style': 'form', 'explode': True }})
    receive_request_attempt_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReceiveRequestAttemptId', 'style': 'form', 'explode': True }})
    version: GetReceiveMessageVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    visibility_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'VisibilityTimeout', 'style': 'form', 'explode': True }})
    wait_time_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'WaitTimeSeconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReceiveMessageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetReceiveMessageRequest:
    path_params: GetReceiveMessagePathParams = field(default=None)
    query_params: GetReceiveMessageQueryParams = field(default=None)
    headers: GetReceiveMessageHeaders = field(default=None)
    

@dataclass
class GetReceiveMessageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
