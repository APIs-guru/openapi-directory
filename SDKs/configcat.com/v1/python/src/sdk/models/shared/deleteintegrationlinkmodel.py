from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteIntegrationLinkModel:
    has_remaining_integration_link: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasRemainingIntegrationLink' }})
    
