from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudBuildOptions:
    r"""CloudBuildOptions
    Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
    """
    
    app_yaml_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appYamlPath') }})
    cloud_build_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudBuildTimeout') }})
    
