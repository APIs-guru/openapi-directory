from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GitConfig:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Branch' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryUrl' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretArn' }})
    
