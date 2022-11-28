from dataclasses import dataclass, field



@dataclass
class PutTIDBookmarkJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDBookmarkJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDBookmarkJSONRequest:
    headers: PutTIDBookmarkJSONHeaders = field()
    path_params: PutTIDBookmarkJSONPathParams = field()
    

@dataclass
class PutTIDBookmarkJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
