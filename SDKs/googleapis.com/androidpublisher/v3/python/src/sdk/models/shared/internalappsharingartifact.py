from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InternalAppSharingArtifact:
    certificate_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateFingerprint' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256' }})
    
