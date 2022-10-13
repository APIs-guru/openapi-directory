from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttributesResource:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    attribute_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeType' }})
    attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    
