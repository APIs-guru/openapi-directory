from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportFindingsError:
    r"""ImportFindingsError
    The list of the findings that cannot be imported. For each finding, the list provides the error.
    """
    
    error_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
