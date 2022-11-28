from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteByteMatchSetRequest:
    byte_match_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ByteMatchSetId') }})
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    
