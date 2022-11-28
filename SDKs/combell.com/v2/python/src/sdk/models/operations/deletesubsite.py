from dataclasses import dataclass, field



@dataclass
class DeleteSubsitePathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    site_name: str = field(metadata={'path_param': { 'field_name': 'siteName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubsiteQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    site_name: str = field(metadata={'query_param': { 'field_name': 'site_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSubsiteRequest:
    path_params: DeleteSubsitePathParams = field()
    query_params: DeleteSubsiteQueryParams = field()
    

@dataclass
class DeleteSubsiteResponse:
    content_type: str = field()
    status_code: int = field()
    
