from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3VideosIDDownloadhistoryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3VideosIDDownloadhistoryHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3VideosIDDownloadhistoryRequest:
    path_params: GetV3VideosIDDownloadhistoryPathParams = field(default=None)
    query_params: GetV3VideosIDDownloadhistoryQueryParams = field(default=None)
    headers: GetV3VideosIDDownloadhistoryHeaders = field(default=None)
    

@dataclass
class GetV3VideosIDDownloadhistoryResponse:
    asset_download_history_results: Optional[shared.AssetDownloadHistoryResults] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
