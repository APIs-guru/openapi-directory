from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetCreateEventSubscriptionActionEnum(str, Enum):
    CREATE_EVENT_SUBSCRIPTION = "CreateEventSubscription"

class GetCreateEventSubscriptionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclass
class GetCreateEventSubscriptionQueryParams:
    action: GetCreateEventSubscriptionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    sns_topic_arn: str = field(metadata={'query_param': { 'field_name': 'SnsTopicArn', 'style': 'form', 'explode': True }})
    subscription_name: str = field(metadata={'query_param': { 'field_name': 'SubscriptionName', 'style': 'form', 'explode': True }})
    version: GetCreateEventSubscriptionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    event_categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'EventCategories', 'style': 'form', 'explode': True }})
    source_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SourceIds', 'style': 'form', 'explode': True }})
    source_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateEventSubscriptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateEventSubscriptionRequest:
    headers: GetCreateEventSubscriptionHeaders = field()
    query_params: GetCreateEventSubscriptionQueryParams = field()
    

@dataclass
class GetCreateEventSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
