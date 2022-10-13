from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema:
    historic_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historic_urls' }})
    live_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url' }})
    
