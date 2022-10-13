from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engineversioninfo


@dataclass_json
@dataclass
class DescribeEngineVersionsResponse:
    engine_versions: Optional[List[engineversioninfo.EngineVersionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
