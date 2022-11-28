from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomConfigurationFormatEnum(str, Enum):
    CSV = "CSV"
    HL7 = "HL7"


@dataclass_json
@dataclass
class CustomConfiguration:
    r"""CustomConfiguration
    A custom configuration for a custom schema
    """
    
    format: CustomConfigurationFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    schema_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaName') }})
    transport: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    name_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFormat') }})
    receiving_organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivingOrganization') }})
    
