from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ProtocolNetflowListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowListRequest:
    path_params: ProtocolNetflowListPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_list_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
