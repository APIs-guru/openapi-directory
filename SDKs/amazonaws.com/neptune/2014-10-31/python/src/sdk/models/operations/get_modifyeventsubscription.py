from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyEventSubscriptionActionEnum(str, Enum):
    MODIFY_EVENT_SUBSCRIPTION = "ModifyEventSubscription"

class GetModifyEventSubscriptionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyEventSubscriptionQueryParams:
    action: GetModifyEventSubscriptionActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EventCategories', 'style': 'form', 'explode': True }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnsTopicArn', 'style': 'form', 'explode': True }})
    source_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceType', 'style': 'form', 'explode': True }})
    subscription_name: str = field(default=None, metadata={'query_param': { 'field_name': 'SubscriptionName', 'style': 'form', 'explode': True }})
    version: GetModifyEventSubscriptionVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyEventSubscriptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyEventSubscriptionRequest:
    query_params: GetModifyEventSubscriptionQueryParams = field(default=None)
    headers: GetModifyEventSubscriptionHeaders = field(default=None)
    

@dataclass
class GetModifyEventSubscriptionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
