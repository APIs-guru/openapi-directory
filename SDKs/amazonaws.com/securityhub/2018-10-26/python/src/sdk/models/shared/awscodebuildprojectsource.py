from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsCodeBuildProjectSource:
    git_clone_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GitCloneDepth' }})
    insecure_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsecureSsl' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
