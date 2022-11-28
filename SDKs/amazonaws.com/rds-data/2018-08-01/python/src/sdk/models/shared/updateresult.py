from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateResult:
    r"""UpdateResult
    The response elements represent the results of an update.
    """
    
    generated_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedFields') }})
    
