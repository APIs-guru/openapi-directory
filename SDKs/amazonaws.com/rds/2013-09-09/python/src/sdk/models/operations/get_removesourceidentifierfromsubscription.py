from dataclasses import dataclass, field
from typing import Enum,Optional

class GetRemoveSourceIdentifierFromSubscriptionActionEnum(str, Enum):
    REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION = "RemoveSourceIdentifierFromSubscription"

class GetRemoveSourceIdentifierFromSubscriptionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_09_09 = "2013-09-09"


@dataclass
class GetRemoveSourceIdentifierFromSubscriptionQueryParams:
    action: GetRemoveSourceIdentifierFromSubscriptionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    source_identifier: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceIdentifier', 'style': 'form', 'explode': True }})
    subscription_name: str = field(default=None, metadata={'query_param': { 'field_name': 'SubscriptionName', 'style': 'form', 'explode': True }})
    version: GetRemoveSourceIdentifierFromSubscriptionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoveSourceIdentifierFromSubscriptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetRemoveSourceIdentifierFromSubscriptionRequest:
    query_params: GetRemoveSourceIdentifierFromSubscriptionQueryParams = field(default=None)
    headers: GetRemoveSourceIdentifierFromSubscriptionHeaders = field(default=None)
    

@dataclass
class GetRemoveSourceIdentifierFromSubscriptionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
