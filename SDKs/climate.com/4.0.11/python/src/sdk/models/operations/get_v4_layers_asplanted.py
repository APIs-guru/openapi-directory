from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetV4LayersAsPlantedQueryParams:
    occurred_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    resource_owner_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceOwnerId', 'style': 'form', 'explode': True }})
    updated_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV4LayersAsPlantedHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV4LayersAsPlantedSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV4LayersAsPlantedRequest:
    headers: GetV4LayersAsPlantedHeaders = field()
    query_params: GetV4LayersAsPlantedQueryParams = field()
    security: GetV4LayersAsPlantedSecurity = field()
    

@dataclass
class GetV4LayersAsPlantedResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    planting_activities: Optional[Any] = field(default=None)
    
