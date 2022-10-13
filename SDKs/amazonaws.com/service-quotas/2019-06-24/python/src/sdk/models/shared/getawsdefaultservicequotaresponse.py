from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import servicequota


@dataclass_json
@dataclass
class GetAwsDefaultServiceQuotaResponse:
    quota: Optional[servicequota.ServiceQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quota' }})
    
