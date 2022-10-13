from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisionedconcurrencyconfiglistitem


@dataclass_json
@dataclass
class ListProvisionedConcurrencyConfigsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    provisioned_concurrency_configs: Optional[List[provisionedconcurrencyconfiglistitem.ProvisionedConcurrencyConfigListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedConcurrencyConfigs' }})
    
