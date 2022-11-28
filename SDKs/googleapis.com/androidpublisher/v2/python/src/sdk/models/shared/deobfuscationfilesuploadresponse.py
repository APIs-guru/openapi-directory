from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeobfuscationFilesUploadResponse:
    deobfuscation_file: Optional[DeobfuscationFile] = field(default=None)
    
