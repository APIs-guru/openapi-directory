from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateState:
    state: ArtifactStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
