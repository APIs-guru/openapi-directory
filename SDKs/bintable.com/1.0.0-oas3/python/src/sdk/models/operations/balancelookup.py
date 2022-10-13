from dataclasses import dataclass, field



@dataclass
class BalanceLookupQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class BalanceLookupRequest:
    query_params: BalanceLookupQueryParams = field(default=None)
    

@dataclass
class BalanceLookupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
