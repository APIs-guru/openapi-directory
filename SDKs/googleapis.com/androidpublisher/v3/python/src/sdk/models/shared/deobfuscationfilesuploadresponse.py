from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deobfuscationfile


@dataclass_json
@dataclass
class DeobfuscationFilesUploadResponse:
    deobfuscation_file: Optional[deobfuscationfile.DeobfuscationFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deobfuscationFile' }})
    
