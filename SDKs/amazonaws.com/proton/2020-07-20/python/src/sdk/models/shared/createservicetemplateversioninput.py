from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compatibleenvironmenttemplateinput
from . import templateversionsourceinput
from . import tag


@dataclass_json
@dataclass
class CreateServiceTemplateVersionInput:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    compatible_environment_templates: List[compatibleenvironmenttemplateinput.CompatibleEnvironmentTemplateInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibleEnvironmentTemplates' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    source: templateversionsourceinput.TemplateVersionSourceInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
