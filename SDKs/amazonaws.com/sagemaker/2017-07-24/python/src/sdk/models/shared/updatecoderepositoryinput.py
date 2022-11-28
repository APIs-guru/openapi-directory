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
class UpdateCodeRepositoryInput:
    code_repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeRepositoryName') }})
    git_config: Optional[GitConfigForUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GitConfig') }})
    
