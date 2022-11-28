from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddressConfiguration:
    r"""AddressConfiguration
    Specifies address-based configuration settings for a message that's sent directly to an endpoint.
    """
    
    body_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyOverride') }})
    channel_type: Optional[ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Context') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    title_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TitleOverride') }})
    
