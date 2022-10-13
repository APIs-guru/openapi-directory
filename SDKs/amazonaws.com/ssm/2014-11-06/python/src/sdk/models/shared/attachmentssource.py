from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentssourcekey_enum


@dataclass_json
@dataclass
class AttachmentsSource:
    key: Optional[attachmentssourcekey_enum.AttachmentsSourceKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
