from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetV3DownloadsQueryParams:
    company_downloads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    product_type: Optional[shared.ProductTypeRequestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    use_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'use_time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3DownloadsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3DownloadsRequest:
    query_params: GetV3DownloadsQueryParams = field(default=None)
    headers: GetV3DownloadsHeaders = field(default=None)
    

@dataclass
class GetV3DownloadsResponse:
    content_type: str = field(default=None)
    get_downloads_response: Optional[shared.GetDownloadsResponse] = field(default=None)
    status_code: int = field(default=None)
    
