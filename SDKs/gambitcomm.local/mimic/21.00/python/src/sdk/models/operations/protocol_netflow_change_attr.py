from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolNetflowChangeAttrPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    field_num: int = field(default=None, metadata={'path_param': { 'field_name': 'field-num', 'style': 'simple', 'explode': False }})
    flowset_uid: int = field(default=None, metadata={'path_param': { 'field_name': 'flowset-uid', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolNetflowChangeAttrRequest:
    path_params: ProtocolNetflowChangeAttrPathParams = field(default=None)
    

@dataclass
class ProtocolNetflowChangeAttrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_netflow_change_attr_200_application_json_string: Optional[str] = field(default=None)
    
