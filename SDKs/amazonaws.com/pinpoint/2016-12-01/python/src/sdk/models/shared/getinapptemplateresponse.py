from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inapptemplateresponse


@dataclass_json
@dataclass
class GetInAppTemplateResponse:
    in_app_template_response: inapptemplateresponse.InAppTemplateResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppTemplateResponse' }})
    
