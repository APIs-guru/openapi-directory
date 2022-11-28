from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ConfigVersion:
    r"""GoogleCloudApigeeV1ConfigVersion
    Version of the API proxy configuration schema. Currently, only 4.0 is supported.
    """
    
    major_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    
