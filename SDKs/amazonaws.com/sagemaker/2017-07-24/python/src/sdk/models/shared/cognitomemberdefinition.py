from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CognitoMemberDefinition:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    user_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserGroup' }})
    user_pool: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPool' }})
    
