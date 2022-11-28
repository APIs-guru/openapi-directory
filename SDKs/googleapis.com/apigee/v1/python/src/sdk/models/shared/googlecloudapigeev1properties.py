from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Properties:
    r"""GoogleCloudApigeeV1Properties
    Message for compatibility with legacy Edge specification for Java Properties object in JSON.
    """
    
    property: Optional[List[GoogleCloudApigeeV1Property]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
