from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional


@dataclass
class Destiny2GetHistoricalStatsPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetHistoricalStatsQueryParams:
    dayend: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dayend', 'style': 'form', 'explode': True }})
    daystart: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'daystart', 'style': 'form', 'explode': True }})
    groups: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'groups', 'style': 'form', 'explode': False }})
    modes: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': False }})
    period_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'periodType', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetHistoricalStatsRequest:
    path_params: Destiny2GetHistoricalStatsPathParams = field()
    query_params: Destiny2GetHistoricalStatsQueryParams = field()
    

@dataclass
class Destiny2GetHistoricalStatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
