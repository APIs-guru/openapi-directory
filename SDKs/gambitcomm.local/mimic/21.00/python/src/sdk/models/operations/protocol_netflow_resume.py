from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowResumePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowResumeRequest:
    path_params: ProtocolNetflowResumePathParams = field(default=None)
    

@dataclass
class ProtocolNetflowResumeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_resume_200_application_json_string: Optional[str] = field(default=None)
    
