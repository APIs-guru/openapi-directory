from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class DetectLabelsRequest:
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    max_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxLabels' }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinConfidence' }})
    
