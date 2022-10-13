from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import servicetemplate


@dataclass_json
@dataclass
class UpdateServiceTemplateOutput:
    service_template: servicetemplate.ServiceTemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTemplate' }})
    
