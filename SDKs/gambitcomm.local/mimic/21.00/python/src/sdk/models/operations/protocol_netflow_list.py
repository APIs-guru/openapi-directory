from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ProtocolNetflowListPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowListRequest:
    path_params: ProtocolNetflowListPathParams = field()
    

@dataclass
class ProtocolNetflowListResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_netflow_list_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
