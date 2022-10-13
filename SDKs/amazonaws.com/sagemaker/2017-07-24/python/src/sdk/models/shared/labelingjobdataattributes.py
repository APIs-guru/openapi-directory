from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contentclassifier_enum


@dataclass_json
@dataclass
class LabelingJobDataAttributes:
    content_classifiers: Optional[List[contentclassifier_enum.ContentClassifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentClassifiers' }})
    
