from dataclasses import dataclass, field



@dataclass
class DeleteSubsitePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    site_name: str = field(default=None, metadata={'path_param': { 'field_name': 'siteName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubsiteQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    site_name: str = field(default=None, metadata={'query_param': { 'field_name': 'site_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSubsiteRequest:
    path_params: DeleteSubsitePathParams = field(default=None)
    query_params: DeleteSubsiteQueryParams = field(default=None)
    

@dataclass
class DeleteSubsiteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
