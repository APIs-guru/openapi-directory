from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResumePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeRequest:
    path_params: ResumePathParams = field(default=None)
    

@dataclass
class ResumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resume_200_application_json_string: Optional[str] = field(default=None)
    
