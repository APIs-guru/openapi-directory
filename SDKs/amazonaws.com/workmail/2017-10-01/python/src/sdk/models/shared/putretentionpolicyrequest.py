from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import folderconfiguration


@dataclass_json
@dataclass
class PutRetentionPolicyRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    folder_configurations: List[folderconfiguration.FolderConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FolderConfigurations' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
