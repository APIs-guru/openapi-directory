from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3ImagesIDDownloadhistoryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryQueryParams:
    company_downloads: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'company_downloads', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ImagesIDDownloadhistoryRequest:
    headers: GetV3ImagesIDDownloadhistoryHeaders = field()
    path_params: GetV3ImagesIDDownloadhistoryPathParams = field()
    query_params: GetV3ImagesIDDownloadhistoryQueryParams = field()
    

@dataclass
class GetV3ImagesIDDownloadhistoryResponse:
    content_type: str = field()
    status_code: int = field()
    asset_download_history_results: Optional[shared.AssetDownloadHistoryResults] = field(default=None)
    
