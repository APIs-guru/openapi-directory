from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentProviderEndpoint:
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    signing_certs_sha256: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingCertsSha256' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
