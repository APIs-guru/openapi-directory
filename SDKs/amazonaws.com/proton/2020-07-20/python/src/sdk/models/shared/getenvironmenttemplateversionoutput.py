from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import environmenttemplateversion


@dataclass_json
@dataclass
class GetEnvironmentTemplateVersionOutput:
    environment_template_version: environmenttemplateversion.EnvironmentTemplateVersion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTemplateVersion' }})
    
