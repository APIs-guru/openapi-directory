from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metadataproperties
from . import actionsource
from . import actionstatus_enum
from . import tag


@dataclass_json
@dataclass
class CreateActionRequest:
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    action_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    source: actionsource.ActionSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    status: Optional[actionstatus_enum.ActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
