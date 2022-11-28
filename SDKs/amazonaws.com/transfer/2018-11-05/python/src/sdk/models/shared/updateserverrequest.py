from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateServerRequest:
    server_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    endpoint_details: Optional[EndpointDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDetails') }})
    endpoint_type: Optional[EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    host_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostKey') }})
    identity_provider_details: Optional[IdentityProviderDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderDetails') }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    protocol_details: Optional[ProtocolDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolDetails') }})
    protocols: Optional[List[ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    security_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityPolicyName') }})
    workflow_details: Optional[WorkflowDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowDetails') }})
    
