from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1OperationConfig:
    r"""GoogleCloudApigeeV1OperationConfig
    Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.
    """
    
    api_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSource') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    operations: Optional[List[GoogleCloudApigeeV1Operation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    quota: Optional[GoogleCloudApigeeV1Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    
