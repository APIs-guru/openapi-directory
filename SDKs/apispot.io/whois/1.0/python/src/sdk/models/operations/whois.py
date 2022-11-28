from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class WhoisPathParams:
    domain: str = field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    
class WhoisFormatEnum(str, Enum):
    RAW = "raw"
    FORMATTED = "formatted"
    JSON = "json"


@dataclass
class WhoisQueryParams:
    format: Optional[WhoisFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class WhoisRequest:
    path_params: WhoisPathParams = field()
    query_params: WhoisQueryParams = field()
    

@dataclass
class WhoisResponse:
    content_type: str = field()
    status_code: int = field()
    
