from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RelatedItem:
    r"""RelatedItem
    Resources that responders use to triage and mitigate the incident.
    """
    
    identifier: ItemIdentifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
