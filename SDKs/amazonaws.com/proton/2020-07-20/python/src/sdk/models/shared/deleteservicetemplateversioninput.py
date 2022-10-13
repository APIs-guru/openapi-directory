from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteServiceTemplateVersionInput:
    major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
