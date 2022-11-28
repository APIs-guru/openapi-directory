from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientPropertiesResult:
    r"""ClientPropertiesResult
    Information about the Amazon WorkSpaces client.
    """
    
    client_properties: Optional[ClientProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientProperties') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    
