from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import environmentaccountconnectionrequesteraccounttype_enum
from . import environmentaccountconnectionstatus_enum


@dataclass_json
@dataclass
class ListEnvironmentAccountConnectionsInput:
    environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    requested_by: environmentaccountconnectionrequesteraccounttype_enum.EnvironmentAccountConnectionRequesterAccountTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedBy' }})
    statuses: Optional[List[environmentaccountconnectionstatus_enum.EnvironmentAccountConnectionStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    
