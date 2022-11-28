from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OncCertificateProvider:
    r"""OncCertificateProvider
    This feature is not generally available.
    """
    
    certificate_references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateReferences') }})
    content_provider_endpoint: Optional[ContentProviderEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentProviderEndpoint') }})
    
