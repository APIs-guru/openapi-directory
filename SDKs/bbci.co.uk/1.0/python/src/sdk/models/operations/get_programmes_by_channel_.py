from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetProgrammesByChannelPathParams:
    channel: str = field(default=None, metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProgrammesByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    page: int = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: int = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgrammesByChannelRequest:
    path_params: GetProgrammesByChannelPathParams = field(default=None)
    query_params: GetProgrammesByChannelQueryParams = field(default=None)
    

@dataclass
class GetProgrammesByChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
