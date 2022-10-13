from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesRequest:
    path_params: GetInstancesPathParams = field(default=None)
    

@dataclass
class GetInstancesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_instances_200_application_json_strings: Optional[List[str]] = field(default=None)
    
