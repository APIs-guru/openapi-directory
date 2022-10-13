from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectionaliasassociation
from . import connectionaliasstate_enum


@dataclass_json
@dataclass
class ConnectionAlias:
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    associations: Optional[List[connectionaliasassociation.ConnectionAliasAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Associations' }})
    connection_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionString' }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccountId' }})
    state: Optional[connectionaliasstate_enum.ConnectionAliasStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
