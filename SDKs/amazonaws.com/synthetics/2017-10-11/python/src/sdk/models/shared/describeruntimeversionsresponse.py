from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeversion


@dataclass_json
@dataclass
class DescribeRuntimeVersionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    runtime_versions: Optional[List[runtimeversion.RuntimeVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeVersions' }})
    
