from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3ImagesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDQueryParams:
    fields: Optional[List[shared.ImageDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3ImagesIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDRequest:
    headers: GetV3ImagesIDHeaders = field()
    path_params: GetV3ImagesIDPathParams = field()
    query_params: GetV3ImagesIDQueryParams = field()
    

@dataclass
class GetV3ImagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    images_detail_results: Optional[shared.ImagesDetailResults] = field(default=None)
    
