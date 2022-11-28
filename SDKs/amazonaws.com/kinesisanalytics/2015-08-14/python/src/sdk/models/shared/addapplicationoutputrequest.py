from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddApplicationOutputRequest:
    r"""AddApplicationOutputRequest
    <p/>
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    output: Output = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    
