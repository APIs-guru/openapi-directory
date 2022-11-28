from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SenderFormatEnum(str, Enum):
    CSV = "CSV"


@dataclass_json
@dataclass
class Sender:
    r"""Sender
    An sender of reports to the data hub
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    format: SenderFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    meta: Optional[SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    

@dataclass_json
@dataclass
class SenderInput:
    r"""SenderInput
    An sender of reports to the data hub
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    format: SenderFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
