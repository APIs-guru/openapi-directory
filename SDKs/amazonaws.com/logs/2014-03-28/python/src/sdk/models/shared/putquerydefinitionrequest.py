from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutQueryDefinitionRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    log_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupNames') }})
    query_definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryDefinitionId') }})
    
