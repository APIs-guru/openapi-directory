from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationDetails:
    r"""ClassificationDetails
    Provides information about a sensitive data finding, including the classification job that produced the finding.
    """
    
    detailed_results_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedResultsLocation') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    result: Optional[ClassificationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
