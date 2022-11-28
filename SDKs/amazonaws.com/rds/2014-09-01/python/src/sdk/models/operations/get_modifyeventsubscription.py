from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyEventSubscriptionActionEnum(str, Enum):
    MODIFY_EVENT_SUBSCRIPTION = "ModifyEventSubscription"

class GetModifyEventSubscriptionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_09_01 = "2014-09-01"


@dataclass
class GetModifyEventSubscriptionQueryParams:
    action: GetModifyEventSubscriptionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    subscription_name: str = field(metadata={'query_param': { 'field_name': 'SubscriptionName', 'style': 'form', 'explode': True }})
    version: GetModifyEventSubscriptionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EventCategories', 'style': 'form', 'explode': True }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SnsTopicArn', 'style': 'form', 'explode': True }})
    source_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceType', 'style': 'form', 'explode': True }})
    

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
    headers: GetModifyEventSubscriptionHeaders = field()
    query_params: GetModifyEventSubscriptionQueryParams = field()
    

@dataclass
class GetModifyEventSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
