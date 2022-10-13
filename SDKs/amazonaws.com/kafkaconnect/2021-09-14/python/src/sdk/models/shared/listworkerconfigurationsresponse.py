from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workerconfigurationsummary


@dataclass_json
@dataclass
class ListWorkerConfigurationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    worker_configurations: Optional[List[workerconfigurationsummary.WorkerConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfigurations' }})
    
