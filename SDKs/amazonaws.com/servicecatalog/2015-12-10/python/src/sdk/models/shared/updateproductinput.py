from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class UpdateProductInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    add_tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddTags' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distributor' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    remove_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveTags' }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportDescription' }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportEmail' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportUrl' }})
    
