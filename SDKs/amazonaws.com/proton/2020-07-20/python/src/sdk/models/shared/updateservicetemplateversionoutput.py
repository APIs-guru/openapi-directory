from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import servicetemplateversion


@dataclass_json
@dataclass
class UpdateServiceTemplateVersionOutput:
    service_template_version: servicetemplateversion.ServiceTemplateVersion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTemplateVersion' }})
    
