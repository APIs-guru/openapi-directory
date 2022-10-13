from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnprocessedCluster:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorType' }})
    
