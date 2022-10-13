from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MavenRepositoryConfigVersionPolicyEnum(str, Enum):
    VERSION_POLICY_UNSPECIFIED = "VERSION_POLICY_UNSPECIFIED"
    RELEASE = "RELEASE"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class MavenRepositoryConfig:
    allow_snapshot_overwrites: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSnapshotOverwrites' }})
    version_policy: Optional[MavenRepositoryConfigVersionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionPolicy' }})
    
