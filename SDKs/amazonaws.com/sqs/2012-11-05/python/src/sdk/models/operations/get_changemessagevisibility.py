from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetChangeMessageVisibilityPathParams:
    account_number: int = field(default=None, metadata={'path_param': { 'field_name': 'AccountNumber', 'style': 'simple', 'explode': False }})
    queue_name: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueName', 'style': 'simple', 'explode': False }})
    
class GetChangeMessageVisibilityActionEnum(str, Enum):
    CHANGE_MESSAGE_VISIBILITY = "ChangeMessageVisibility"

class GetChangeMessageVisibilityVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_11_05 = "2012-11-05"


@dataclass
class GetChangeMessageVisibilityQueryParams:
    action: GetChangeMessageVisibilityActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    receipt_handle: str = field(default=None, metadata={'query_param': { 'field_name': 'ReceiptHandle', 'style': 'form', 'explode': True }})
    version: GetChangeMessageVisibilityVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    visibility_timeout: int = field(default=None, metadata={'query_param': { 'field_name': 'VisibilityTimeout', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChangeMessageVisibilityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChangeMessageVisibilityRequest:
    path_params: GetChangeMessageVisibilityPathParams = field(default=None)
    query_params: GetChangeMessageVisibilityQueryParams = field(default=None)
    headers: GetChangeMessageVisibilityHeaders = field(default=None)
    

@dataclass
class GetChangeMessageVisibilityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
