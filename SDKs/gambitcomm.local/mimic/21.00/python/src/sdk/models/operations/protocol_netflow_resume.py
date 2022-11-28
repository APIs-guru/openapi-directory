from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowResumePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowResumeRequest:
    path_params: ProtocolNetflowResumePathParams = field()
    

@dataclass
class ProtocolNetflowResumeResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_resume_200_application_json_string: Optional[str] = field(default=None)
    
