from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ExportRequest:
    r"""GoogleCloudApigeeV1ExportRequest
    Request body for [CreateExportRequest]
    """
    
    csv_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvDelimiter') }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreName') }})
    date_range: Optional[GoogleCloudApigeeV1DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFormat') }})
    
