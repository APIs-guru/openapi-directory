from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryPipelineExecutionRequest:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    pipeline_execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionArn' }})
    
