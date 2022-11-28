from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CompatibleEnvironmentTemplateInput:
    r"""CompatibleEnvironmentTemplateInput
    Compatible environment template data.
    """
    
    major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    
