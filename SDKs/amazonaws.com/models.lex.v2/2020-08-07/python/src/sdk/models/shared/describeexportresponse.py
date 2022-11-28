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
class DescribeExportResponse:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUrl') }})
    export_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportId') }})
    export_status: Optional[ExportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportStatus') }})
    failure_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReasons') }})
    file_format: Optional[ImportExportFileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_specification: Optional[ExportResourceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceSpecification') }})
    
