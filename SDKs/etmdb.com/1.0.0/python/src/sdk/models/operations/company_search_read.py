from dataclasses import dataclass, field



@dataclass
class CompanySearchReadPathParams:
    company_name: str = field(default=None, metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanySearchReadRequest:
    path_params: CompanySearchReadPathParams = field(default=None)
    

@dataclass
class CompanySearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
