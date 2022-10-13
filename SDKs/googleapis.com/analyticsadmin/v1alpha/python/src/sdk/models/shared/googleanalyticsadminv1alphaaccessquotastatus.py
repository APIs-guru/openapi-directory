from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessQuotaStatus:
    consumed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumed' }})
    remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    
