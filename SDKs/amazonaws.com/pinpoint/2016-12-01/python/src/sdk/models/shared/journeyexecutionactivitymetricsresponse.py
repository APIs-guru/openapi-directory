from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JourneyExecutionActivityMetricsResponse:
    activity_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityType' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    journey_activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyActivityId' }})
    journey_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyId' }})
    last_evaluated_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedTime' }})
    metrics: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    
