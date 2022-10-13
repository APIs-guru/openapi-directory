from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationannotation
from . import timesegment


@dataclass_json
@dataclass
class VideoClassificationAnnotation:
    classification_annotation: Optional[classificationannotation.ClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classificationAnnotation' }})
    time_segment: Optional[timesegment.TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSegment' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
