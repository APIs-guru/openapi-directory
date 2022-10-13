from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StorageListFilesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderType', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class StorageListFilesSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageListFilesRequest:
    query_params: StorageListFilesQueryParams = field(default=None)
    security: StorageListFilesSecurity = field(default=None)
    

@dataclass
class StorageListFilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file_list: Optional[shared.FileList] = field(default=None)
    
