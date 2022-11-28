from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCodeBuildProjectSource:
    r"""AwsCodeBuildProjectSource
    Information about the build input source code for this build project.
    """
    
    git_clone_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GitCloneDepth') }})
    insecure_ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsecureSsl') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
