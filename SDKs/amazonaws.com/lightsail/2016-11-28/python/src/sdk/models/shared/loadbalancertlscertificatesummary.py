from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateSummary:
    r"""LoadBalancerTLSCertificateSummary
    Provides a summary of SSL/TLS certificate metadata.
    """
    
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAttached') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
