from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apideployment


@dataclass_json
@dataclass
class ListAPIDeploymentsResponse:
    api_deployments: Optional[List[apideployment.APIDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiDeployments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
