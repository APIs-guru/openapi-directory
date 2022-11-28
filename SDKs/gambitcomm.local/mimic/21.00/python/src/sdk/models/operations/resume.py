from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ResumePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeRequest:
    path_params: ResumePathParams = field()
    

@dataclass
class ResumeResponse:
    content_type: str = field()
    status_code: int = field()
    resume_200_application_json_string: Optional[str] = field(default=None)
    
