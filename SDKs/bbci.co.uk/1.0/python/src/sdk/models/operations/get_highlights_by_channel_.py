from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetHighlightsByChannelPathParams:
    channel: str = field(default=None, metadata={'path_param': { 'field_name': 'channel', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHighlightsByChannelQueryParams:
    availability: shared.AvailabilityEnum = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    lang: shared.LangEnum = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    live: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'live', 'style': 'form', 'explode': True }})
    mixin: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHighlightsByChannelRequest:
    path_params: GetHighlightsByChannelPathParams = field(default=None)
    query_params: GetHighlightsByChannelQueryParams = field(default=None)
    

@dataclass
class GetHighlightsByChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
