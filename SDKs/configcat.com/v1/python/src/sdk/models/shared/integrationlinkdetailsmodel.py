from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import integrationlinkdetail


@dataclass_json
@dataclass
class IntegrationLinkDetailsModel:
    all_integration_link_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allIntegrationLinkCount' }})
    details: Optional[List[integrationlinkdetail.IntegrationLinkDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    
