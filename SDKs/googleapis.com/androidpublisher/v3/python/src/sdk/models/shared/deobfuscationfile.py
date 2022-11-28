from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeobfuscationFileSymbolTypeEnum(str, Enum):
    DEOBFUSCATION_FILE_TYPE_UNSPECIFIED = "deobfuscationFileTypeUnspecified"
    PROGUARD = "proguard"
    NATIVE_CODE = "nativeCode"


@dataclass_json
@dataclass
class DeobfuscationFile:
    r"""DeobfuscationFile
    Represents a deobfuscation file.
    """
    
    symbol_type: Optional[DeobfuscationFileSymbolTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbolType') }})
    
