from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmenttemplate


@dataclass_json
@dataclass
class DeleteEnvironmentTemplateOutput:
    environment_template: Optional[environmenttemplate.EnvironmentTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentTemplate' }})
    
