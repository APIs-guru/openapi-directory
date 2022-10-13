from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadataproperties
from . import artifactsource
from . import tag


@dataclass_json
@dataclass
class CreateArtifactRequest:
    artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactName' }})
    artifact_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactType' }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    source: artifactsource.ArtifactSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
