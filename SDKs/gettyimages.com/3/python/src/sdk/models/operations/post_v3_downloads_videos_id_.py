from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV3DownloadsVideosIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3DownloadsVideosIDQueryParams:
    auto_download: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'auto_download', 'style': 'form', 'explode': True }})
    product_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'product_id', 'style': 'form', 'explode': True }})
    size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    use_team_credits: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'use_team_credits', 'style': 'form', 'explode': True }})
    

@dataclass
class PostV3DownloadsVideosIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3DownloadsVideosIDRequests:
    premium_access_download_data: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    premium_access_download_data1: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    premium_access_download_data2: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    premium_access_download_data3: Optional[shared.PremiumAccessDownloadData] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostV3DownloadsVideosIDRequest:
    headers: PostV3DownloadsVideosIDHeaders = field()
    path_params: PostV3DownloadsVideosIDPathParams = field()
    query_params: PostV3DownloadsVideosIDQueryParams = field()
    request: Optional[PostV3DownloadsVideosIDRequests] = field(default=None)
    

@dataclass
class PostV3DownloadsVideosIDResponse:
    content_type: str = field()
    status_code: int = field()
    
