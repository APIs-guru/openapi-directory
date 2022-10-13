from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mavenrepositoryconfig

class RepositoryFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    DOCKER = "DOCKER"
    MAVEN = "MAVEN"
    NPM = "NPM"
    APT = "APT"
    YUM = "YUM"
    PYTHON = "PYTHON"
    KFP = "KFP"


@dataclass_json
@dataclass
class Repository:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    format: Optional[RepositoryFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    maven_config: Optional[mavenrepositoryconfig.MavenRepositoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mavenConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
