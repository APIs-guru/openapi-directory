from dataclasses import dataclass, field



@dataclass
class DeleteCatchAllPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    email_address: str = field(default=None, metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCatchAllQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    email_address: str = field(default=None, metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCatchAllRequest:
    path_params: DeleteCatchAllPathParams = field(default=None)
    query_params: DeleteCatchAllQueryParams = field(default=None)
    

@dataclass
class DeleteCatchAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
