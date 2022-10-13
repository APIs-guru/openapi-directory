from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningquota


@dataclass_json
@dataclass
class ListProvisioningQuotasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    provisioning_quotas: Optional[List[provisioningquota.ProvisioningQuota]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningQuotas' }})
    
