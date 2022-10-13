from dataclasses import dataclass, field



@dataclass
class GetServiceDetailsByIDPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceDetailsByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServiceDetailsByIDRequest:
    path_params: GetServiceDetailsByIDPathParams = field(default=None)
    query_params: GetServiceDetailsByIDQueryParams = field(default=None)
    

@dataclass
class GetServiceDetailsByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
