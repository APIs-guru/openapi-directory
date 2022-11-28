from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateSubscriptionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSubscriptionSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = field()
    query_params: UpdateSubscriptionQueryParams = field()
    security: UpdateSubscriptionSecurity = field()
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
