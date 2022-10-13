from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domain_enum
from . import endpointdetails
from . import endpointtype_enum
from . import identityproviderdetails
from . import identityprovidertype_enum
from . import protocol_enum
from . import tag
from . import workflowdetails


@dataclass_json
@dataclass
class CreateServerRequest:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    domain: Optional[domain_enum.DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    endpoint_details: Optional[endpointdetails.EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointDetails' }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    host_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostKey' }})
    identity_provider_details: Optional[identityproviderdetails.IdentityProviderDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderDetails' }})
    identity_provider_type: Optional[identityprovidertype_enum.IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderType' }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingRole' }})
    protocols: Optional[List[protocol_enum.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocols' }})
    security_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityPolicyName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    workflow_details: Optional[workflowdetails.WorkflowDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowDetails' }})
    
