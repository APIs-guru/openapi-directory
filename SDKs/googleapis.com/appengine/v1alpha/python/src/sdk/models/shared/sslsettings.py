from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SslSettings:
    r"""SslSettings
    SSL configuration for a DomainMapping resource.
    """
    
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    is_managed_certificate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isManagedCertificate') }})
    
