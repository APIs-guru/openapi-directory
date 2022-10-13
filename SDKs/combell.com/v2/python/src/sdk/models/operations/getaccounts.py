from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAccountsQueryParams:
    asset_type: Optional[shared.AssetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'asset_type', 'style': 'form', 'explode': True }})
    identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'identifier', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = field(default=None)
    

@dataclass
class GetAccountsResponse:
    accounts: Optional[List[shared.Account]] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
