from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchSource:
    r"""PatchSource
    Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
    """
    
    configuration: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    products: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Products') }})
    
