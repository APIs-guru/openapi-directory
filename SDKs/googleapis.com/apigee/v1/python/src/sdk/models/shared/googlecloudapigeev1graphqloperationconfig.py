from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1GraphQlOperationConfig:
    r"""GoogleCloudApigeeV1GraphQlOperationConfig
    Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.
    """
    
    api_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSource') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    operations: Optional[List[GoogleCloudApigeeV1GraphQlOperation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    quota: Optional[GoogleCloudApigeeV1Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    
