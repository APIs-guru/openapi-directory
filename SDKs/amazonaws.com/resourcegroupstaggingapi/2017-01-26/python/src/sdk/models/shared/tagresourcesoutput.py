from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failureinfo


@dataclass_json
@dataclass
class TagResourcesOutput:
    failed_resources_map: Optional[dict[str, failureinfo.FailureInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedResourcesMap' }})
    
