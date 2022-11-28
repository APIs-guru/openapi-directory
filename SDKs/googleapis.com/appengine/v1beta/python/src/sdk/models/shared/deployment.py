from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Deployment:
    r"""Deployment
    Code and application artifacts used to deploy a version to App Engine.
    """
    
    build: Optional[BuildInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    cloud_build_options: Optional[CloudBuildOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudBuildOptions') }})
    container: Optional[ContainerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    files: Optional[dict[str, FileInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    zip: Optional[ZipInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
