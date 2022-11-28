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
class ExecuteStatementResponse:
    r"""ExecuteStatementResponse
    The response elements represent the output of a request to run a SQL statement against a database.
    """
    
    column_metadata: Optional[List[ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMetadata') }})
    generated_fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedFields') }})
    number_of_records_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfRecordsUpdated') }})
    records: Optional[List[List[Field]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    
