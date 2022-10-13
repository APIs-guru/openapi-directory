from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ImagesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDQueryParams:
    fields: Optional[List[shared.ImageDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3ImagesIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3ImagesIDRequest:
    path_params: GetV3ImagesIDPathParams = field(default=None)
    query_params: GetV3ImagesIDQueryParams = field(default=None)
    headers: GetV3ImagesIDHeaders = field(default=None)
    

@dataclass
class GetV3ImagesIDResponse:
    content_type: str = field(default=None)
    images_detail_results: Optional[shared.ImagesDetailResults] = field(default=None)
    status_code: int = field(default=None)
    
