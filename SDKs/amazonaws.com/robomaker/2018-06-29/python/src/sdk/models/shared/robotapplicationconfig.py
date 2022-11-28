from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RobotApplicationConfig:
    r"""RobotApplicationConfig
    Application configuration information for a robot.
    """
    
    application: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    launch_config: LaunchConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchConfig') }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationVersion') }})
    tools: Optional[List[Tool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tools') }})
    upload_configurations: Optional[List[UploadConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadConfigurations') }})
    use_default_tools: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultTools') }})
    use_default_upload_configurations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultUploadConfigurations') }})
    
