from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class DatabaseCreateCollectionRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    rules: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    write: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass
class DatabaseCreateCollectionSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DatabaseCreateCollectionRequest:
    security: DatabaseCreateCollectionSecurity = field()
    request: Optional[DatabaseCreateCollectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DatabaseCreateCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    collection: Optional[shared.Collection] = field(default=None)
    
