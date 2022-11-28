from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href=\"https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html\">Importing Users Incrementally</a>.
    """
    
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
