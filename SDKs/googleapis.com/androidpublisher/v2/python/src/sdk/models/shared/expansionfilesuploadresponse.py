from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ExpansionFilesUploadResponse:
    expansion_file: Optional[ExpansionFile] = field(default=None)
    
