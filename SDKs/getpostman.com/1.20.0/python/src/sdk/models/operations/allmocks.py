from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllMocks200ApplicationJSONMocks:
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mock_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mockUrl') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class AllMocks200ApplicationJSON:
    mocks: Optional[List[AllMocks200ApplicationJSONMocks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mocks') }})
    

@dataclass
class AllMocksResponse:
    content_type: str = field()
    status_code: int = field()
    all_mocks_200_application_json_object: Optional[AllMocks200ApplicationJSON] = field(default=None)
    
