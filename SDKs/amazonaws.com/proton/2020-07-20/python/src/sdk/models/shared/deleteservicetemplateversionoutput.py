from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicetemplateversion


@dataclass_json
@dataclass
class DeleteServiceTemplateVersionOutput:
    service_template_version: Optional[servicetemplateversion.ServiceTemplateVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTemplateVersion' }})
    
