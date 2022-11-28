from dataclasses import dataclass, field



@dataclass
class JobSearchReadPathParams:
    job_title: str = field(metadata={'path_param': { 'field_name': 'job_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobSearchReadRequest:
    path_params: JobSearchReadPathParams = field()
    

@dataclass
class JobSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
