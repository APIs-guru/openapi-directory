from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class DetectCustomLabelsRequest:
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinConfidence' }})
    project_version_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectVersionArn' }})
    
