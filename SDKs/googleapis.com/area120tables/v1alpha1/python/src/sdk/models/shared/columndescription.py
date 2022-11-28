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
class ColumnDescription:
    r"""ColumnDescription
    Details on a column in the table.
    """
    
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    date_details: Optional[DateDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateDetails') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[List[LabeledItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lookup_details: Optional[LookupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookupDetails') }})
    multiple_values_disallowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleValuesDisallowed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonly') }})
    relationship_details: Optional[RelationshipDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipDetails') }})
    
