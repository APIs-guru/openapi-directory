from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsLambdaLayerVersionDetails:
    compatible_runtimes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompatibleRuntimes' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
