from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Result:
    r"""Result
    Details about the account that was not processed.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    processing_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingResult') }})
    
