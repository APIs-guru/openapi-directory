from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetReceiveMessagePathParams:
    account_number: int = field(metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetReceiveMessageActionEnum(str, Enum):
    RECEIVE_MESSAGE = "ReceiveMessage"

class GetReceiveMessageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetReceiveMessageQueryParams:
    action: GetReceiveMessageActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetReceiveMessageVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    attribute_names: Optional[List[shared.QueueAttributeNameEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'AttributeNames', 'style': 'form', 'explode': True }})
    max_number_of_messages: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxNumberOfMessages', 'style': 'form', 'explode': True }})
    message_attribute_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'MessageAttributeNames', 'style': 'form', 'explode': True }})
    receive_request_attempt_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReceiveRequestAttemptId', 'style': 'form', 'explode': True }})
    visibility_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'VisibilityTimeout', 'style': 'form', 'explode': True }})
    wait_time_seconds: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'WaitTimeSeconds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReceiveMessageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReceiveMessageRequest:
    headers: GetReceiveMessageHeaders = field()
    path_params: GetReceiveMessagePathParams = field()
    query_params: GetReceiveMessageQueryParams = field()
    

@dataclass
class GetReceiveMessageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
