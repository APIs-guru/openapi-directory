from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsAppliedQueryParams:
    occurred_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    resource_owner_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceOwnerId', 'style': 'form', 'explode': True }})
    updated_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV4LayersAsAppliedHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsAppliedSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetV4LayersAsAppliedSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsAppliedSecurity:
    option1: Optional[GetV4LayersAsAppliedSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetV4LayersAsAppliedSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetV4LayersAsAppliedRequest:
    query_params: GetV4LayersAsAppliedQueryParams = field(default=None)
    headers: GetV4LayersAsAppliedHeaders = field(default=None)
    security: GetV4LayersAsAppliedSecurity = field(default=None)
    

@dataclass
class GetV4LayersAsAppliedResponse:
    application_activities: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
