from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2GetRecommendedGroupsPathParams:
    create_date_range: int = field(metadata={'path_param': { 'field_name': 'createDateRange', 'style': 'simple', 'explode': False }})
    group_type: int = field(metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetRecommendedGroupsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetRecommendedGroupsRequest:
    path_params: GroupV2GetRecommendedGroupsPathParams = field()
    security: GroupV2GetRecommendedGroupsSecurity = field()
    

@dataclass
class GroupV2GetRecommendedGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
