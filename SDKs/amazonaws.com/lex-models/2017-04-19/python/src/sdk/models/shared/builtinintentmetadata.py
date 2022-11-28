from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuiltinIntentMetadata:
    r"""BuiltinIntentMetadata
    Provides metadata for a built-in intent.
    """
    
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    supported_locales: Optional[List[LocaleEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedLocales') }})
    
