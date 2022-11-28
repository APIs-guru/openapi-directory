from dataclasses import dataclass, field



@dataclass
class CompanySearchReadPathParams:
    company_name: str = field(metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanySearchReadRequest:
    path_params: CompanySearchReadPathParams = field()
    

@dataclass
class CompanySearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
