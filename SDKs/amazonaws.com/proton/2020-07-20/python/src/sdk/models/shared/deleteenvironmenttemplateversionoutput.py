from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmenttemplateversion


@dataclass_json
@dataclass
class DeleteEnvironmentTemplateVersionOutput:
    environment_template_version: Optional[environmenttemplateversion.EnvironmentTemplateVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTemplateVersion' }})
    
