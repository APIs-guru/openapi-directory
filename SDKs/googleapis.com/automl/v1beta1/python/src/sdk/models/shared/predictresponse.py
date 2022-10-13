from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotationpayload
from . import examplepayload


@dataclass_json
@dataclass
class PredictResponse:
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    payload: Optional[List[annotationpayload.AnnotationPayload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    preprocessed_input: Optional[examplepayload.ExamplePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprocessedInput' }})
    
