from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import flowtemplatedescription


@dataclass_json
@dataclass
class GetFlowTemplateResponse:
    description: Optional[flowtemplatedescription.FlowTemplateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
