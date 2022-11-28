from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetServiceTemplateVersionOutput:
    service_template_version: ServiceTemplateVersion = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceTemplateVersion') }})
    
