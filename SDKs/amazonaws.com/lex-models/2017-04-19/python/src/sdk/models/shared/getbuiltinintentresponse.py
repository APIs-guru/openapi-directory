from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBuiltinIntentResponse:
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    slots: Optional[List[BuiltinIntentSlot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    supported_locales: Optional[List[LocaleEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedLocales') }})
    
