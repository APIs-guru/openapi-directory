from dataclasses import dataclass, field



@dataclass
class JobSearchReadPathParams:
    job_title: str = field(default=None, metadata={'path_param': { 'field_name': 'job_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobSearchReadRequest:
    path_params: JobSearchReadPathParams = field(default=None)
    

@dataclass
class JobSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
