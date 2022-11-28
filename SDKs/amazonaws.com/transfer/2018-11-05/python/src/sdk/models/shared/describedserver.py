from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribedServer:
    r"""DescribedServer
    Describes the properties of a file transfer protocol-enabled server that was specified.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    domain: Optional[DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    endpoint_details: Optional[EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDetails') }})
    endpoint_type: Optional[EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    host_key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostKeyFingerprint') }})
    identity_provider_details: Optional[IdentityProviderDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderDetails') }})
    identity_provider_type: Optional[IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    protocol_details: Optional[ProtocolDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolDetails') }})
    protocols: Optional[List[ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    security_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicyName') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    state: Optional[StateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCount') }})
    workflow_details: Optional[WorkflowDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowDetails') }})
    
