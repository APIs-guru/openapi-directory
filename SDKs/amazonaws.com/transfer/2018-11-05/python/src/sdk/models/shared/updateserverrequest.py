from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import endpointdetails
from . import endpointtype_enum
from . import identityproviderdetails
from . import protocoldetails
from . import protocol_enum
from . import workflowdetails


@dataclass_json
@dataclass
class UpdateServerRequest:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    endpoint_details: Optional[endpointdetails.EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointDetails' }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    host_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostKey' }})
    identity_provider_details: Optional[identityproviderdetails.IdentityProviderDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderDetails' }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingRole' }})
    protocol_details: Optional[protocoldetails.ProtocolDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolDetails' }})
    protocols: Optional[List[protocol_enum.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    security_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicyName' }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    workflow_details: Optional[workflowdetails.WorkflowDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowDetails' }})
    
