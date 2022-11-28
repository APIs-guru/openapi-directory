from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParameterMetadata:
    r"""ParameterMetadata
    Metadata includes information like the ARN of the last user and the date/time the parameter was last used.
    """
    
    allowed_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedPattern') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedUser') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    policies: Optional[List[ParameterInlinePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    tier: Optional[ParameterTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    type: Optional[ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
