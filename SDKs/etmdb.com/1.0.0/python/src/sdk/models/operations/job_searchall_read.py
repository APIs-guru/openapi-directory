from dataclasses import dataclass, field



@dataclass
class JobSearchallReadPathParams:
    company_name: str = field(metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobSearchallReadRequest:
    path_params: JobSearchallReadPathParams = field()
    

@dataclass
class JobSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
