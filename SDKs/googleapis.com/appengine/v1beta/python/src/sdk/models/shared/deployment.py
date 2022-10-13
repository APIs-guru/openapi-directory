from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buildinfo
from . import cloudbuildoptions
from . import containerinfo
from . import fileinfo
from . import zipinfo


@dataclass_json
@dataclass
class Deployment:
    build: Optional[buildinfo.BuildInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    cloud_build_options: Optional[cloudbuildoptions.CloudBuildOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudBuildOptions' }})
    container: Optional[containerinfo.ContainerInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    files: Optional[dict[str, fileinfo.FileInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    zip: Optional[zipinfo.ZipInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
