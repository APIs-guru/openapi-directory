from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v2androidapplication


@dataclass_json
@dataclass
class V2AndroidKeyRestrictions:
    allowed_applications: Optional[List[v2androidapplication.V2AndroidApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedApplications' }})
    
