from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customlabel


@dataclass_json
@dataclass
class DetectCustomLabelsResponse:
    custom_labels: Optional[List[customlabel.CustomLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomLabels' }})
    
