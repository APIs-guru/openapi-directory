from dataclasses import dataclass, field



@dataclass
class PutTIDBookmarkJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDBookmarkJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass
class PutTIDBookmarkJSONRequest:
    path_params: PutTIDBookmarkJSONPathParams = field(default=None)
    headers: PutTIDBookmarkJSONHeaders = field(default=None)
    

@dataclass
class PutTIDBookmarkJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
