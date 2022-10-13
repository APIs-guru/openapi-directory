from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import journeyexecutionmetricsresponse


@dataclass_json
@dataclass
class GetJourneyExecutionMetricsResponse:
    journey_execution_metrics_response: journeyexecutionmetricsresponse.JourneyExecutionMetricsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyExecutionMetricsResponse' }})
    
