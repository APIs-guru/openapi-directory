from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListedServer:
    r"""ListedServer
    Returns properties of a file transfer protocol-enabled server that was specified.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    domain: Optional[DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    endpoint_type: Optional[EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    identity_provider_type: Optional[IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityProviderType') }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingRole') }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerId') }})
    state: Optional[StateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserCount') }})
    
