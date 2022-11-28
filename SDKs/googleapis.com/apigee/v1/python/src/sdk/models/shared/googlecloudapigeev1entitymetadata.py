from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1EntityMetadata:
    r"""GoogleCloudApigeeV1EntityMetadata
    Metadata common to many entities in this API.
    """
    
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subType') }})
    
