from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetObjectsPathParams:
    oid: str = field(default=None, metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectsRequest:
    path_params: GetObjectsPathParams = field(default=None)
    

@dataclass
class GetObjectsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_objects_200_application_json_strings: Optional[List[str]] = field(default=None)
    
