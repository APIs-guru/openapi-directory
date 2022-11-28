from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TerminologyData:
    r"""TerminologyData
    The data associated with the custom terminology.
    """
    
    file: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('File') }})
    format: TerminologyDataFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    
