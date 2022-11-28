from dataclasses import dataclass, field



@dataclass
class DeleteAliasPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    email_address: str = field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAliasQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    email_address: str = field(metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAliasRequest:
    path_params: DeleteAliasPathParams = field()
    query_params: DeleteAliasQueryParams = field()
    

@dataclass
class DeleteAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
