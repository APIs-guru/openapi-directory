from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationsummary


@dataclass_json
@dataclass
class CreateApplicationResponse:
    application_summary: applicationsummary.ApplicationSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSummary' }})
    
