from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointSendConfiguration:
    r"""EndpointSendConfiguration
    Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
    """
    
    body_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyOverride') }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Context') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    title_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TitleOverride') }})
    
