from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuiltinSlotTypeMetadata:
    r"""BuiltinSlotTypeMetadata
    Provides information about a built in slot type.
    """
    
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    supported_locales: Optional[List[LocaleEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedLocales') }})
    
