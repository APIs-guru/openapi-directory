from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetChannelsQueryParams:
    lang: shared.LangEnum = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelsRequest:
    query_params: GetChannelsQueryParams = field()
    

@dataclass
class GetChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
