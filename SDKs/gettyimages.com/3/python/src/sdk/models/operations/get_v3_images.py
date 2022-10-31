from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ImagesQueryParams:
    fields: Optional[List[shared.ImageDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3ImagesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesRequest:
    query_params: GetV3ImagesQueryParams = field(default=None)
    headers: GetV3ImagesHeaders = field(default=None)
    

@dataclass
class GetV3ImagesResponse:
    content_type: str = field(default=None)
    images_detail_results: Optional[shared.ImagesDetailResults] = field(default=None)
    status_code: int = field(default=None)
    
