from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIOverviewSSHKeyFingerprints:
    sha256_dsa: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SHA256_DSA' }})
    sha256_rsa: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SHA256_RSA' }})
    

@dataclass_json
@dataclass
class APIOverview:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    api: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    git: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'git' }})
    hooks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks' }})
    importer: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importer' }})
    pages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    ssh_key_fingerprints: Optional[APIOverviewSSHKeyFingerprints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key_fingerprints' }})
    verifiable_password_authentication: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiable_password_authentication' }})
    web: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'web' }})
    
