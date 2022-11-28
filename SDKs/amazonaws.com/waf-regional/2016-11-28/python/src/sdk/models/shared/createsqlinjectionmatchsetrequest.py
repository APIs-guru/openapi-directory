from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateSQLInjectionMatchSetRequest:
    r"""CreateSQLInjectionMatchSetRequest
    A request to create a <a>SqlInjectionMatchSet</a>.
    """
    
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
