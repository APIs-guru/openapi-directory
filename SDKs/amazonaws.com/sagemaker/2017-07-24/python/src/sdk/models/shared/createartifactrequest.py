from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateArtifactRequest:
    artifact_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactType') }})
    source: ArtifactSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactName') }})
    metadata_properties: Optional[MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataProperties') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Properties') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
