from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIOverview:
    dependabot: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependabot' }})
    github_services_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_services_sha' }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installed_version' }})
    packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages' }})
    verifiable_password_authentication: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiable_password_authentication' }})
    
