from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import artifacttype_enum
from . import mavenreference
from . import s3contentlocation


@dataclass_json
@dataclass
class CustomArtifactConfiguration:
    artifact_type: artifacttype_enum.ArtifactTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactType' }})
    maven_reference: Optional[mavenreference.MavenReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MavenReference' }})
    s3_content_location: Optional[s3contentlocation.S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocation' }})
    
