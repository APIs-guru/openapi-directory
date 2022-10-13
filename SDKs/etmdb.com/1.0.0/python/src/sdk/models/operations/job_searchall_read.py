from dataclasses import dataclass, field



@dataclass
class JobSearchallReadPathParams:
    company_name: str = field(default=None, metadata={'path_param': { 'field_name': 'company_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobSearchallReadRequest:
    path_params: JobSearchallReadPathParams = field(default=None)
    

@dataclass
class JobSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
