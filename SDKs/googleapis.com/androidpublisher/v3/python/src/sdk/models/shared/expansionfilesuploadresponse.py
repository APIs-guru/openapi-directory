from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expansionfile


@dataclass_json
@dataclass
class ExpansionFilesUploadResponse:
    expansion_file: Optional[expansionfile.ExpansionFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expansionFile' }})
    
