from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageConfig:
    r"""ImageConfig
    Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
    """
    
    repository_access_mode: RepositoryAccessModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAccessMode') }})
    repository_auth_config: Optional[RepositoryAuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryAuthConfig') }})
    
