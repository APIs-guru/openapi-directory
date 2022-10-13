from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class WhoisPathParams:
    domain: str = field(default=None, metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    
class WhoisFormatEnum(str, Enum):
    RAW = "raw"
    FORMATTED = "formatted"
    JSON = "json"


@dataclass
class WhoisQueryParams:
    format: Optional[WhoisFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class WhoisRequest:
    path_params: WhoisPathParams = field(default=None)
    query_params: WhoisQueryParams = field(default=None)
    

@dataclass
class WhoisResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
