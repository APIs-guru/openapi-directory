from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ZebraGetQueryParams:
    format: str = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    value: str = field(metadata={'query_param': { 'field_name': 'value', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    showlabel: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showlabel', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class ZebraGetSecurity:
    query_api_key: shared.SchemeQueryAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class ZebraGetRequest:
    query_params: ZebraGetQueryParams = field()
    security: ZebraGetSecurity = field()
    

@dataclass
class ZebraGetResponse:
    content_type: str = field()
    status_code: int = field()
    zebra_get_200_image_png_binary_string: Optional[bytes] = field(default=None)
    
