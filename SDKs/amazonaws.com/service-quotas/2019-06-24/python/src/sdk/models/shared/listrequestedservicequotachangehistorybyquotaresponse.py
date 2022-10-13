from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import requestedservicequotachange


@dataclass_json
@dataclass
class ListRequestedServiceQuotaChangeHistoryByQuotaResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    requested_quotas: Optional[List[requestedservicequotachange.RequestedServiceQuotaChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedQuotas' }})
    
