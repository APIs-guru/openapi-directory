from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HivePartitioningOptions:
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    require_partition_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirePartitionFilter' }})
    source_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUriPrefix' }})
    
