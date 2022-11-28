from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetHighlightsByChannelPathParams:
    channel: str = field(metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHighlightsByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    live: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'live', 'style': 'form', 'explode': True }})
    mixin: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHighlightsByChannelRequest:
    path_params: GetHighlightsByChannelPathParams = field()
    query_params: GetHighlightsByChannelQueryParams = field()
    

@dataclass
class GetHighlightsByChannelResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
