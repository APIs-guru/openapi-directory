from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListCustomReportsResponse:
    r"""GoogleCloudApigeeV1ListCustomReportsResponse
    This message encapsulates a list of custom report definitions
    """
    
    qualifier: Optional[List[GoogleCloudApigeeV1CustomReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifier') }})
    
