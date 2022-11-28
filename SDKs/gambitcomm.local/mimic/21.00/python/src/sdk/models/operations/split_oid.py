from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SplitOidPathParams:
    oid: str = field(metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SplitOidRequest:
    path_params: SplitOidPathParams = field()
    

@dataclass
class SplitOidResponse:
    content_type: str = field()
    status_code: int = field()
    split_oid_200_application_json_strings: Optional[List[str]] = field(default=None)
    
