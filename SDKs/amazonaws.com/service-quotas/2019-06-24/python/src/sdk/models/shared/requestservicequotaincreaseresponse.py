from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import requestedservicequotachange


@dataclass_json
@dataclass
class RequestServiceQuotaIncreaseResponse:
    requested_quota: Optional[requestedservicequotachange.RequestedServiceQuotaChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedQuota' }})
    
