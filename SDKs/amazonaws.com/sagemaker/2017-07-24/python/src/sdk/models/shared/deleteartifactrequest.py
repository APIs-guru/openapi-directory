from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import artifactsource


@dataclass_json
@dataclass
class DeleteArtifactRequest:
    artifact_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactArn' }})
    source: Optional[artifactsource.ArtifactSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
