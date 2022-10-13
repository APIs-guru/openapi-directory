from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationresult


@dataclass_json
@dataclass
class DataClassificationDetails:
    detailed_results_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailedResultsLocation' }})
    result: Optional[classificationresult.ClassificationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    
