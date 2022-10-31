from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3ImagesIDDownloadhistoryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryRequest:
    path_params: GetV3ImagesIDDownloadhistoryPathParams = field(default=None)
    query_params: GetV3ImagesIDDownloadhistoryQueryParams = field(default=None)
    headers: GetV3ImagesIDDownloadhistoryHeaders = field(default=None)
    

@dataclass
class GetV3ImagesIDDownloadhistoryResponse:
    asset_download_history_results: Optional[shared.AssetDownloadHistoryResults] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
