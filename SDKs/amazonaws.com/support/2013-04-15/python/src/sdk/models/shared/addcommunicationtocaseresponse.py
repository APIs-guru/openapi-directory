from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AddCommunicationToCaseResponse:
    r"""AddCommunicationToCaseResponse
    The result of the <a>AddCommunicationToCase</a> operation.
    """
    
    result: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
