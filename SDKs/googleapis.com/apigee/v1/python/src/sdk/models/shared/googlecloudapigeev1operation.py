from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Operation:
    r"""GoogleCloudApigeeV1Operation
    Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
    """
    
    methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
