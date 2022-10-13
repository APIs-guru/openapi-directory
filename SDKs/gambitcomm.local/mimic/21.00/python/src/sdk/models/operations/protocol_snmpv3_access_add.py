from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3AccessAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    context_match: str = field(default=None, metadata={'path_param': { 'field_name': 'contextMatch', 'style': 'simple', 'explode': False }})
    group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    notify_view: str = field(default=None, metadata={'path_param': { 'field_name': 'notifyView', 'style': 'simple', 'explode': False }})
    prefix: str = field(default=None, metadata={'path_param': { 'field_name': 'prefix', 'style': 'simple', 'explode': False }})
    read_view: str = field(default=None, metadata={'path_param': { 'field_name': 'readView', 'style': 'simple', 'explode': False }})
    security_level: str = field(default=None, metadata={'path_param': { 'field_name': 'securityLevel', 'style': 'simple', 'explode': False }})
    security_model: str = field(default=None, metadata={'path_param': { 'field_name': 'securityModel', 'style': 'simple', 'explode': False }})
    write_view: str = field(default=None, metadata={'path_param': { 'field_name': 'writeView', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3AccessAddRequest:
    path_params: ProtocolSnmpv3AccessAddPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3AccessAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_access_add_200_application_json_string: Optional[str] = field(default=None)
    
