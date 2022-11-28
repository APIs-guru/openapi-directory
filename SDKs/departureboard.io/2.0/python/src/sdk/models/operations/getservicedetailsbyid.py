from dataclasses import dataclass, field



@dataclass
class GetServiceDetailsByIDPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetServiceDetailsByIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServiceDetailsByIDRequest:
    path_params: GetServiceDetailsByIDPathParams = field()
    query_params: GetServiceDetailsByIDQueryParams = field()
    

@dataclass
class GetServiceDetailsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    
