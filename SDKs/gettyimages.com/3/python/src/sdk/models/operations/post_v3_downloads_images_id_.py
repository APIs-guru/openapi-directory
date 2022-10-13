from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostV3DownloadsImagesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3DownloadsImagesIDQueryParams:
    auto_download: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'auto_download', 'style': 'form', 'explode': True }})
    file_type: Optional[shared.DownloadFileTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'file_type', 'style': 'form', 'explode': True }})
    height: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    product_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'product_id', 'style': 'form', 'explode': True }})
    product_type: Optional[shared.ProductTypeRequestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    use_team_credits: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'use_team_credits', 'style': 'form', 'explode': True }})
    

@dataclass
class PostV3DownloadsImagesIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class PostV3DownloadsImagesIDRequests:
    premium_access_download_data: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    premium_access_download_data1: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    premium_access_download_data2: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    premium_access_download_data3: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostV3DownloadsImagesIDRequest:
    path_params: PostV3DownloadsImagesIDPathParams = field(default=None)
    query_params: PostV3DownloadsImagesIDQueryParams = field(default=None)
    headers: PostV3DownloadsImagesIDHeaders = field(default=None)
    request: Optional[PostV3DownloadsImagesIDRequests] = field(default=None)
    

@dataclass
class PostV3DownloadsImagesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
