from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentConfig:
    r"""DeploymentConfig
    Currently, the <code>DeploymentConfig</code> API is not supported.
    """
    
    blue_green_update_policy: BlueGreenUpdatePolicy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueGreenUpdatePolicy') }})
    auto_rollback_configuration: Optional[AutoRollbackConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRollbackConfiguration') }})
    
