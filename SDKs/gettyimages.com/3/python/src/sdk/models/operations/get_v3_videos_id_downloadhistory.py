from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3VideosIDDownloadhistoryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3VideosIDDownloadhistoryHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDDownloadhistoryRequest:
    headers: GetV3VideosIDDownloadhistoryHeaders = field()
    path_params: GetV3VideosIDDownloadhistoryPathParams = field()
    query_params: GetV3VideosIDDownloadhistoryQueryParams = field()
    

@dataclass
class GetV3VideosIDDownloadhistoryResponse:
    content_type: str = field()
    status_code: int = field()
    asset_download_history_results: Optional[shared.AssetDownloadHistoryResults] = field(default=None)
    
