from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowResumePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowResumeRequest:
    path_params: ProtocolSflowResumePathParams = field()
    

@dataclass
class ProtocolSflowResumeResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_resume_200_application_json_string: Optional[str] = field(default=None)
    
