from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputfilelocation
from . import overwriteexisting_enum


@dataclass_json
@dataclass
class CopyStepDetails:
    destination_file_location: Optional[inputfilelocation.InputFileLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationFileLocation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overwrite_existing: Optional[overwriteexisting_enum.OverwriteExistingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverwriteExisting' }})
    
