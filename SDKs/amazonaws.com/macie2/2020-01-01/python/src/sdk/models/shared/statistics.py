from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Statistics:
    r"""Statistics
    Provides processing statistics for a classification job.
    """
    
    approximate_number_of_objects_to_process: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateNumberOfObjectsToProcess') }})
    number_of_runs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfRuns') }})
    
