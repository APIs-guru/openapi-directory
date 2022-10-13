from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateOptions:
    certificate_transparency_logging_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateTransparencyLoggingPreference' }})
    
