from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicetemplate


@dataclass_json
@dataclass
class DeleteServiceTemplateOutput:
    service_template: Optional[servicetemplate.ServiceTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTemplate' }})
    
