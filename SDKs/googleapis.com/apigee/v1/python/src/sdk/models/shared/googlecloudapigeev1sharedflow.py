from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1SharedFlow:
    r"""GoogleCloudApigeeV1SharedFlow
    The metadata describing a shared flow
    """
    
    latest_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRevisionId') }})
    meta_data: Optional[GoogleCloudApigeeV1EntityMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metaData') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
