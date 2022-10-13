from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping:
    field_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldFilter' }})
    group_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupFields' }})
    
