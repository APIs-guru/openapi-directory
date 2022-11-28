from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JSONFormatDescriptor:
    r"""JSONFormatDescriptor
    Contains information about how a source JSON data file should be analyzed.
    """
    
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Charset') }})
    file_compression: Optional[JSONFileCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileCompression') }})
    
