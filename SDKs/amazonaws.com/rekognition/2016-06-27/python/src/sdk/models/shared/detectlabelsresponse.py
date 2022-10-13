from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import label
from . import orientationcorrection_enum


@dataclass_json
@dataclass
class DetectLabelsResponse:
    label_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelModelVersion' }})
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    orientation_correction: Optional[orientationcorrection_enum.OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrientationCorrection' }})
    
