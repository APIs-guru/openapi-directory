from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceServicePerimetersRequest:
    r"""ReplaceServicePerimetersRequest
    A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    service_perimeters: Optional[List[ServicePerimeter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePerimeters') }})
    
