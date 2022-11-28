from dataclasses import dataclass, field



@dataclass
class DeleteTIDJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTIDJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTIDJSONRequest:
    headers: DeleteTIDJSONHeaders = field()
    path_params: DeleteTIDJSONPathParams = field()
    

@dataclass
class DeleteTIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
