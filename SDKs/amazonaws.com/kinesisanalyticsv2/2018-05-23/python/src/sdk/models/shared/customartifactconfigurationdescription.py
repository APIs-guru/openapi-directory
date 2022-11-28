from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomArtifactConfigurationDescription:
    r"""CustomArtifactConfigurationDescription
    Specifies a dependency JAR or a JAR of user-defined functions.
    """
    
    artifact_type: Optional[ArtifactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactType') }})
    maven_reference_description: Optional[MavenReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MavenReferenceDescription') }})
    s3_content_location_description: Optional[S3ContentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationDescription') }})
    
