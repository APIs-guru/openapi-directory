from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAppResult:
    r"""CreateAppResult
    Contains the response to a <code>CreateApp</code> request.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    
