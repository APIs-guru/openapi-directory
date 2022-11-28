from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LookupDetails:
    r"""LookupDetails
    Details about a lookup column whose value comes from the associated relationship.
    """
    
    relationship_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipColumn') }})
    relationship_column_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipColumnId') }})
    
