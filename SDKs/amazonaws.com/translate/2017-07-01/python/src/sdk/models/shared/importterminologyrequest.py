from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportTerminologyRequest:
    merge_strategy: MergeStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergeStrategy') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    terminology_data: TerminologyData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyData') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    encryption_key: Optional[EncryptionKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    
