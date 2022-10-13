from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import environmenttemplate


@dataclass_json
@dataclass
class UpdateEnvironmentTemplateOutput:
    environment_template: environmenttemplate.EnvironmentTemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTemplate' }})
    
