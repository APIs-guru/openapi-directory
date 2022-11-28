from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetScheduleByChannelPathParams:
    channel: str = field(metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    date_: str = field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduleByChannelRequest:
    path_params: GetScheduleByChannelPathParams = field()
    query_params: GetScheduleByChannelQueryParams = field()
    

@dataclass
class GetScheduleByChannelResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
