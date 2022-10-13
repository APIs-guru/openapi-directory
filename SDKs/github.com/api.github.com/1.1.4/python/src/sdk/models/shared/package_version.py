from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PackageVersionMetadataContainerContainerMetadata:
    tags: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class PackageVersionMetadataDockerDockerMetadata:
    tag: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
class PackageVersionMetadataPackageTypeEnum(str, Enum):
    NPM = "npm"
    MAVEN = "maven"
    RUBYGEMS = "rubygems"
    DOCKER = "docker"
    NUGET = "nuget"
    CONTAINER = "container"


@dataclass_json
@dataclass
class PackageVersionMetadataPackageVersionMetadata:
    container: Optional[PackageVersionMetadataContainerContainerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    docker: Optional[PackageVersionMetadataDockerDockerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'docker' }})
    package_type: PackageVersionMetadataPackageTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package_type' }})
    

@dataclass_json
@dataclass
class PackageVersion:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    metadata: Optional[PackageVersionMetadataPackageVersionMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package_html_url' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
