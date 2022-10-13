from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import artifacttype_enum
from . import mavenreference
from . import s3contentlocation


@dataclass_json
@dataclass
class CustomArtifactConfigurationDescription:
    artifact_type: Optional[artifacttype_enum.ArtifactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtifactType' }})
    maven_reference_description: Optional[mavenreference.MavenReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MavenReferenceDescription' }})
    s3_content_location_description: Optional[s3contentlocation.S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ContentLocationDescription' }})
    
