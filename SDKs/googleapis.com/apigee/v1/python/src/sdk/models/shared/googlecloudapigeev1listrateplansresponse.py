from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1rateplan


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListRatePlansResponse:
    next_start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextStartKey' }})
    rate_plans: Optional[List[googlecloudapigeev1rateplan.GoogleCloudApigeeV1RatePlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratePlans' }})
    
