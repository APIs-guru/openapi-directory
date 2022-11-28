from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataClassificationDetails:
    r"""DataClassificationDetails
    Provides details about sensitive data that was detected on a resource.
    """
    
    detailed_results_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailedResultsLocation') }})
    result: Optional[ClassificationResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
