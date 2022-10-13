from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rel' }})
    
