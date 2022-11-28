from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JourneyExecutionActivityMetricsResponse:
    r"""JourneyExecutionActivityMetricsResponse
    Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
    """
    
    activity_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivityType') }})
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    journey_activity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyActivityId') }})
    journey_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyId') }})
    last_evaluated_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedTime') }})
    metrics: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    
