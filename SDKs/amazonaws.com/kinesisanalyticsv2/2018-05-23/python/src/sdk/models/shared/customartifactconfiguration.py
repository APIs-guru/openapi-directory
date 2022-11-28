from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomArtifactConfiguration:
    r"""CustomArtifactConfiguration
    Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
    """
    
    artifact_type: ArtifactTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactType') }})
    maven_reference: Optional[MavenReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MavenReference') }})
    s3_content_location: Optional[S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    
