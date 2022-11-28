from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesRequest:
    path_params: GetInstancesPathParams = field()
    

@dataclass
class GetInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_200_application_json_strings: Optional[List[str]] = field(default=None)
    
