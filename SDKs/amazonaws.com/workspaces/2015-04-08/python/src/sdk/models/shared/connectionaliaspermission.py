from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectionAliasPermission:
    allow_association: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowAssociation' }})
    shared_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAccountId' }})
    
