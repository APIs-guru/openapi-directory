from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import featurevalue


@dataclass_json
@dataclass
class GetRecordResponse:
    record: Optional[List[featurevalue.FeatureValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Record' }})
    
