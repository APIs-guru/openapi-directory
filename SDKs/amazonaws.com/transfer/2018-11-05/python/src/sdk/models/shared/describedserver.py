from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domain_enum
from . import endpointdetails
from . import endpointtype_enum
from . import identityproviderdetails
from . import identityprovidertype_enum
from . import protocoldetails
from . import protocol_enum
from . import state_enum
from . import tag
from . import workflowdetails


@dataclass_json
@dataclass
class DescribedServer:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    domain: Optional[domain_enum.DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    endpoint_details: Optional[endpointdetails.EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointDetails' }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    host_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostKeyFingerprint' }})
    identity_provider_details: Optional[identityproviderdetails.IdentityProviderDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderDetails' }})
    identity_provider_type: Optional[identityprovidertype_enum.IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderType' }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingRole' }})
    protocol_details: Optional[protocoldetails.ProtocolDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtocolDetails' }})
    protocols: Optional[List[protocol_enum.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    security_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicyName' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    state: Optional[state_enum.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserCount' }})
    workflow_details: Optional[workflowdetails.WorkflowDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowDetails' }})
    
