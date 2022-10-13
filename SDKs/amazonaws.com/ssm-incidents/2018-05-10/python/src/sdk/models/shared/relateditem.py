from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import itemidentifier


@dataclass_json
@dataclass
class RelatedItem:
    identifier: itemidentifier.ItemIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
