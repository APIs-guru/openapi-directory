from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScriptHandler:
    r"""ScriptHandler
    Executes a script to handle the request that matches the URL pattern.
    """
    
    script_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptPath') }})
    
