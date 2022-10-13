from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domain_enum
from . import endpointtype_enum
from . import identityprovidertype_enum
from . import state_enum


@dataclass_json
@dataclass
class ListedServer:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    domain: Optional[domain_enum.DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    endpoint_type: Optional[endpointtype_enum.EndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    identity_provider_type: Optional[identityprovidertype_enum.IdentityProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityProviderType' }})
    logging_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingRole' }})
    server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    state: Optional[state_enum.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    user_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserCount' }})
    
