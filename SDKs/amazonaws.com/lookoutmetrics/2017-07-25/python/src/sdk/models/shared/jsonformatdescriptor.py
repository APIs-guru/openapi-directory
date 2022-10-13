from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jsonfilecompression_enum


@dataclass_json
@dataclass
class JSONFormatDescriptor:
    charset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charset' }})
    file_compression: Optional[jsonfilecompression_enum.JSONFileCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileCompression' }})
    
