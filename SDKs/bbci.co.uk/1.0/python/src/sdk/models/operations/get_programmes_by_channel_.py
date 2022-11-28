from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProgrammesByChannelPathParams:
    channel: str = field(metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProgrammesByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    page: int = field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: int = field(metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgrammesByChannelRequest:
    path_params: GetProgrammesByChannelPathParams = field()
    query_params: GetProgrammesByChannelQueryParams = field()
    

@dataclass
class GetProgrammesByChannelResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
