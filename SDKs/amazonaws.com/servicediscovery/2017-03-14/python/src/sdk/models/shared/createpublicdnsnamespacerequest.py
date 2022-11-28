from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePublicDNSNamespaceRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    properties: Optional[PublicDNSNamespaceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
