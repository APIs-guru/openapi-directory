from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListReleaseAssetsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListReleaseAssetsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListReleaseAssetsRequest:
    path_params: ReposListReleaseAssetsPathParams = field()
    query_params: ReposListReleaseAssetsQueryParams = field()
    

@dataclass
class ReposListReleaseAssetsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    release_assets: Optional[List[shared.ReleaseAsset]] = field(default=None)
    
