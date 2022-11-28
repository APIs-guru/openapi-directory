from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class TagsCountTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"
    DP = "dp"
    GR = "gr"


@dataclass
class TagsCountQueryParams:
    datapoints: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'datapoints', 'style': 'form', 'explode': True }})
    groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groups', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[TagsCountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class TagsCountRequest:
    query_params: TagsCountQueryParams = field()
    

@dataclass
class TagsCountResponse:
    content_type: str = field()
    status_code: int = field()
    system_object: Optional[dict[str, Any]] = field(default=None)
    
