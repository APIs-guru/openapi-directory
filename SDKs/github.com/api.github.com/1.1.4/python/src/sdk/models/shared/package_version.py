from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PackageVersionPackageVersionMetadataContainerMetadata:
    tags: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class PackageVersionPackageVersionMetadataDockerMetadata:
    tag: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class PackageVersionPackageVersionMetadataPackageTypeEnum(str, Enum):
    NPM = "npm"
    MAVEN = "maven"
    RUBYGEMS = "rubygems"
    DOCKER = "docker"
    NUGET = "nuget"
    CONTAINER = "container"


@dataclass_json
@dataclass
class PackageVersionPackageVersionMetadata:
    package_type: PackageVersionPackageVersionMetadataPackageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_type') }})
    container: Optional[PackageVersionPackageVersionMetadataContainerMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    docker: Optional[PackageVersionPackageVersionMetadataDockerMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docker') }})
    

@dataclass_json
@dataclass
class PackageVersion:
    r"""PackageVersion
    A version of a software package
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_html_url') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[PackageVersionPackageVersionMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
