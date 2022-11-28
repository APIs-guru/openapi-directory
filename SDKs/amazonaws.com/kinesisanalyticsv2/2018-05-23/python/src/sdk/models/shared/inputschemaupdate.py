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
class InputSchemaUpdate:
    r"""InputSchemaUpdate
    Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
    """
    
    record_column_updates: Optional[List[RecordColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordColumnUpdates') }})
    record_encoding_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordEncodingUpdate') }})
    record_format_update: Optional[RecordFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatUpdate') }})
    
