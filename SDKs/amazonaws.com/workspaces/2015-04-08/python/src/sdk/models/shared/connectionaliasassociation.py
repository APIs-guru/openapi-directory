from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import associationstatus_enum


@dataclass_json
@dataclass
class ConnectionAliasAssociation:
    associated_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociatedAccountId' }})
    association_status: Optional[associationstatus_enum.AssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationStatus' }})
    connection_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionIdentifier' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
