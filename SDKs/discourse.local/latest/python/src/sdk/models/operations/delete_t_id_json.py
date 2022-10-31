from dataclasses import dataclass, field



@dataclass
class DeleteTIDJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTIDJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTIDJSONRequest:
    path_params: DeleteTIDJSONPathParams = field(default=None)
    headers: DeleteTIDJSONHeaders = field(default=None)
    

@dataclass
class DeleteTIDJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
