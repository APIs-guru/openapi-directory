from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdTechnologyProviders:
    detected_provider_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedProviderIds' }})
    has_unidentified_provider: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasUnidentifiedProvider' }})
    
