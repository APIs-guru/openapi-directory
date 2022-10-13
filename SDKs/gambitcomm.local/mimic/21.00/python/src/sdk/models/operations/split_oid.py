from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SplitOidPathParams:
    oid: str = field(default=None, metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SplitOidRequest:
    path_params: SplitOidPathParams = field(default=None)
    

@dataclass
class SplitOidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    split_oid_200_application_json_strings: Optional[List[str]] = field(default=None)
    
