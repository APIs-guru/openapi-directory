from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import attributesresource


@dataclass_json
@dataclass
class RemoveAttributesResponse:
    attributes_resource: attributesresource.AttributesResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributesResource' }})
    
