from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeobfuscationFileSymbolTypeEnum(str, Enum):
    DEOBFUSCATION_FILE_TYPE_UNSPECIFIED = "deobfuscationFileTypeUnspecified"
    PROGUARD = "proguard"
    NATIVE_CODE = "nativeCode"


@dataclass_json
@dataclass
class DeobfuscationFile:
    symbol_type: Optional[DeobfuscationFileSymbolTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbolType' }})
    
