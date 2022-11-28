from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlotTypeRegexConfiguration:
    r"""SlotTypeRegexConfiguration
    Provides a regular expression used to validate the value of a slot.
    """
    
    pattern: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pattern') }})
    
