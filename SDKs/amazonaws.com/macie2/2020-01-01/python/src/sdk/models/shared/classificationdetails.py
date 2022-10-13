from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classificationresult


@dataclass_json
@dataclass
class ClassificationDetails:
    detailed_results_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedResultsLocation' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    result: Optional[classificationresult.ClassificationResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
