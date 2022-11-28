from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateOptions:
    r"""AwsCertificateManagerCertificateOptions
    Contains other options for the certificate.
    """
    
    certificate_transparency_logging_preference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateTransparencyLoggingPreference') }})
    
