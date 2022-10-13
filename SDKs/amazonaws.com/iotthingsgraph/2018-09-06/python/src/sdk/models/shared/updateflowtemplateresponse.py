from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import flowtemplatesummary


@dataclass_json
@dataclass
class UpdateFlowTemplateResponse:
    summary: Optional[flowtemplatesummary.FlowTemplateSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
