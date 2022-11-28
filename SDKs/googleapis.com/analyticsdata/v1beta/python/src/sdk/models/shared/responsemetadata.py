from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponseMetaData:
    r"""ResponseMetaData
    Response's metadata carrying additional information about the report content.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    data_loss_from_other_row: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLossFromOtherRow') }})
    empty_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyReason') }})
    schema_restriction_response: Optional[SchemaRestrictionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaRestrictionResponse') }})
    subject_to_thresholding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectToThresholding') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
