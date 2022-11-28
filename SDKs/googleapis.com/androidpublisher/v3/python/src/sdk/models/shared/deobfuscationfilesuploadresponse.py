from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeobfuscationFilesUploadResponse:
    r"""DeobfuscationFilesUploadResponse
    Responses for the upload.
    """
    
    deobfuscation_file: Optional[DeobfuscationFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deobfuscationFile') }})
    
