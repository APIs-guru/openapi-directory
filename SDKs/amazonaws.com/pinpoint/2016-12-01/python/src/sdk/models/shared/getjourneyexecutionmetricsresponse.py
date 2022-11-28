from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetJourneyExecutionMetricsResponse:
    journey_execution_metrics_response: JourneyExecutionMetricsResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyExecutionMetricsResponse') }})
    
