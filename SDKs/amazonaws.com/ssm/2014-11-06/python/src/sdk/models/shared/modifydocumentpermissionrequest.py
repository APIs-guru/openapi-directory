from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentpermissiontype_enum


@dataclass_json
@dataclass
class ModifyDocumentPermissionRequest:
    account_ids_to_add: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIdsToAdd' }})
    account_ids_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIdsToRemove' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    permission_type: documentpermissiontype_enum.DocumentPermissionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    shared_document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedDocumentVersion' }})
    
