from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import journeyexecutionactivitymetricsresponse


@dataclass_json
@dataclass
class GetJourneyExecutionActivityMetricsResponse:
    journey_execution_activity_metrics_response: journeyexecutionactivitymetricsresponse.JourneyExecutionActivityMetricsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyExecutionActivityMetricsResponse' }})
    
