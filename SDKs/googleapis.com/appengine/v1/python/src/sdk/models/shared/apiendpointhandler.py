from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIEndpointHandler:
    r"""APIEndpointHandler
    Uses Google Cloud Endpoints to handle requests.
    """
    
    script_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptPath') }})
    
