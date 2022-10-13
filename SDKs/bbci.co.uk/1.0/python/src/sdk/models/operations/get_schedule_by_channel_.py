from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetScheduleByChannelPathParams:
    channel: str = field(default=None, metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduleByChannelRequest:
    path_params: GetScheduleByChannelPathParams = field(default=None)
    query_params: GetScheduleByChannelQueryParams = field(default=None)
    

@dataclass
class GetScheduleByChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
